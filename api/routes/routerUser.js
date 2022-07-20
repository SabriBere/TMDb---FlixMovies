const express = require('express')
const { User, Favorites } = require('../models/indexm')
const routersUser = express.Router()
const passport = require('passport')
const { Op } = require('sequelize')
const router = require('./indexr')


routersUser.get('/:name/:id', (req, res) => {
    const { name, id } = req.params;
    Favorites.findAll({
        include: {
            model: User,
            where: {
                name, [Op.not]: [{ id }]
            }
        }
    })
        .then((users) => res.status(200).send(users))
        .catch((error) => console.log(error))
})

routersUser.post('/register', (req, res) => {
    /* console.log('info', req.body) */
    const { name, email, password } = req.body
    User.findOne({
        where: {
            email
        }
    })
        .then((data) => {
            /*  console.log(data) */
            if (!data) {
                User.create(req.body)
                    .then((newUser) => {
                        res.status(201).send(newUser)
                    })
            }
            else {
                res.send('Usuario ya existente')
            }
        })
        .catch((error) => console.log(error))
});


routersUser.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('El usuario logro loguearse')
    res.send(req.user)
        .catch((error) => res.status(500).send(error))
})


routersUser.post('/logout', function (req, res, next) {
    console.log('El usuario se deslogueo')
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


//Hacer un findorCreate de los usuarios
//Este funciona
/* routersUser.post('/register', (req, res) => { */
/*  User.create(req.body)
     .then((newUser) => {
         res.status(201).send(newUser)
     })
     .catch((error) => res.status(500).send(error)) */
/*   const { name, email, password } = req.body;
  User.findOrCreate({
      where: { name, email, password },
  })
      .then((newUser) => res.status(201).send(newUser))
      .catch((error) => res.status(500).send(error)); */
/* console.log('USER', req.body) */
/* El email tiene que ser diferente */
/* }) */






module.exports = routersUser;
