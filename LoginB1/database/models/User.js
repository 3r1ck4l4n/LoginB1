module.exports= (sequelize, dataTypes)=>{
    let alias='Usuarios';
    let cols={
        correo:{
            type: dataTypes.STRING(30),
            allowNull: false,
            primaryKey: true
        },
        nombres:{
            type: dataTypes.STRING(15),
            allowNull: false
        },
        apellidos:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        pass:{
            type: dataTypes.STRING(20),
            allowNull: false
        }
    };
    
    let config={
        timestamps: false,
        tableName: 'users'
    }
    
    let User = sequelize.define(alias, cols, config);
    
    return User;
}