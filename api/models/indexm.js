const User = require('./User.js');
const Favorites = require('./Favorites')

//Acá irían todas las relaciones necesarias
/* Pages.belongsTo(Users, { as: 'author' }); */

Favorites.belongsToMany(User, { through: 'users_like' })

module.exports = { User, Favorites };
