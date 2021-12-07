const path = require('path');
const db = require('../database/models');
const {Op} = require('sequelize');
const User = db.User;

let UserController = {
    login: function (req, res) {
        res.sendFile(path.join(__dirname, '../login.html'));
    },
    validate: (req, res) => {
    
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
    
    }
}

module.exports = UserController;