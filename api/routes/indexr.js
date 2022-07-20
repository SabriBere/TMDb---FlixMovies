//index de rutas
const express = require("express");
const router = express.Router();
const routerUser = require('./routerUser.js')
const routersFavorites = require('./routesFavorites')

router.use('/user', routerUser)
router.use('/favorites', routersFavorites)

//hacer rutas de user con autenticación
//en el modelo debe existir la tabla users

router.get("/", (req, res, next) => {
    res.send("API está viva! 3001");
});

module.exports = router; 