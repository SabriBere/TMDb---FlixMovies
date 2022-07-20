const Sequelize = require('sequelize');
const db = require('../db/indexdb.js');
const bcrypt = require('bcrypt')

class User extends Sequelize.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt)
    }
}

User.init({
    //findOrCreate para evitar que no se repita el nombre. Si existe en la db 
    //Modificar el modelo para que almacene los favoritos del usuario
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    salt: {
        type: Sequelize.STRING
    }
}, { sequelize: db, modelName: 'user' })

//Metodos de instancia y hooks asincronicos
//Acá va el passport con el hook

//Salt y hash juntos?
User.beforeCreate((user) => {
    return bcrypt
        .genSalt(16)
        .then((salt) => {
            user.salt = salt;
            return user.hash(user.password, user.salt);
        })
        .then((hash) => {
            user.password = hash;
        });
});


module.exports = User;