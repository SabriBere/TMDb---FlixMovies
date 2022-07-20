const express = require('express')
const { Favorites, User } = require('../models/indexm')
const routersFavorites = express.Router()


routersFavorites.get("/:id", (req, res) => {
  const id = req.params.id;
  Favorites.findAll({ include: { model: User, where: { id } } })
    .then((favorites) =>
      res.status(200).send(favorites)
    );
});



//Probar de hacer un findOrCreate
routersFavorites.put("/add", (req, res) => {
  console.log('Add', req.body)
  const { userId } = req.body;
  Favorites.create(req.body)
    .then((like) => {
      User.findOne({ where: { id: userId } })
        .then((user) => like.addUser(user))
        .then(() => res.sendStatus(200))
        .catch((error) => res.status(500).send(error))
    })
});

/* routersFavorites.put("/add", (req, res) => {
  console.log(req.body)
  const { code, userId } = req.body;
  Favorites.findOne({ where: { code } }).then((favorite) => {
    if (favorite) return "Already added";
    Favorites.create(req.body)
      .then((like) => {
        User.findByPk(userId)
          .then((user) => like.addUser(user))
          .then(() => res.sendStatus(200))
          .catch((error) => res.status(500).send(error))
      })
  });
}); */


//está eliminando la tabla intermedia, las relaciones
routersFavorites.delete("/remove/:id/:code", (req, res) => {
  console.log('hola', req.params)
  const { id, code } = req.params
  Favorites.findOne({ where: { code } })
    .then((movie) => {
      User.findByPk(id)
        .then((user) => { movie.removeUser(user) })
        .then(() => res.sendStatus(200))
        .catch((error) => console.log(error))
    })

});




module.exports = routersFavorites;