const Sequelize = require('sequelize');
const db = require('../db/indexdb.js');

class Favorites extends Sequelize.Model {
}

Favorites.init({

    code: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ovwerview: {
        type: Sequelize.STRING,
    },
    imagen: {
        type: Sequelize.STRING,
    }

}, { sequelize: db, modelName: 'favorites' })


module.exports = Favorites;

//crear favoritos, titulo (create) recibe el codeid
//Promesa con pindByPK users
//addFavoritos 