const path = require('path');
const db = require('../database/models');
const {Op} = require('sequelize');
const User = db.User;
const nodemailer = require('nodemailer');

let UserController = {
    login: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    validate: (req, res) => {
        db.Usuarios.findByPk(req.body.correo,{
            where:{
                pass: {
                    [Op.eq]: req.body.pass
                }
            }
        })
            .then(user=>{
                console.log(user.dataValues);
                res.render('home',{user:user.dataValues})
                }
            )
            .catch(error=> console.log(error));
        
    },
    form: (req, res)=>{
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    register: (req, res) => {
        console.log(req.body);
        let usuario = {
            correo: req.body.correo,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            pass: req.body.pass
        }
        db.Usuarios.create(usuario)
            .then(value => {
                console.log(value);
                res.send("Usuario registrado");
                
            })
            .catch(error => {
                console.log(error)
            });
    },
    forgetPass: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/forget.html'));
    },
    recoverPass:(req, res)=>{
        let pass;
        const transporter = nodemailer.createTransport({
            service:'Gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth:{
                user:'ejemplob1soft@gmail.com',
                pass:'b1Soft1234'
            }
        });
        db.Usuarios.findOne({
            where:{
                correo:{
                    [Op.eq]:req.body.correo
                }
            }
        })
            .then(user=>{
                pass=user.pass;
                const mail ={
                    from: 'ejemplopractica1@gmail.com',
                    to:req.body.correo,
                    subject: "Aqui tienen su pass",
                    text:`Esta es su contraseña:${pass}`
                };
                
                transporter.sendMail(mail,(error, info)=>{
                    if(error){
                        console.log(error);
                    }else {
                        console.log("Enviado");
                        res.redirect("/login")
                    }
                })
            })
        
       
        
    },
    home:(req, res)=>{
        res.render('home')
    }
}

module.exports = UserController;