const express = require("express");
const app = express();
const db = require('./db/indexdb')
const routes = require('./routes/indexr');
const User = require('./models/User.js')
const Favorites = require('./models/Favorites')
const models = require('./models/indexm')
const cors = require("cors");
const cokieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const localStrategy = require("passport-local").Strategy;
const volleyball = require('volleyball')

//acá tengo que llamar a passport también, el cooki parser, etc.

app.use(express.json())
app.use(cors()); // esta librería es para poder trabajar front con back en localhost
app.use(cokieParser())

//Almacena la sesiones de los usuarios
app.use(session({
    secret: 'FlixMovies',
    resave: false,
    saveUninitialized: true,

}))
//Passport inicializacion y session
app.use(passport.initialize())
app.use(passport.session())

//Estrategia de autemticación
passport.use(
    new localStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        function (email, password, done) {
            User.findOne({
                where:
                    { email }
            })
                .then((user) => {
                    if (!user) {
                        return done(null, false); // user not found
                    }
                    user.hash(password, user.salt).then((hash) => {
                        if (hash !== user.password) {
                            return done(null, false); // invalid password
                        }
                        return done(null, user); // success :D
                    });
                })
                .catch(done);
        }
    )
);

// How we save the user
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

//Para desloguear tengo que mandar el id del usuario
// How we look for the user
passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
        .catch(done)
});

app.use("/api", routes); //todas las rutas empiezan con api
app.use(volleyball);
app.use(express.static('public'))
app.use("/", (req, res, next) => res.redirect("/api"));


db.sync({ force: false })
    .then(() => {
        app.listen(3001, (req, res, next) => {
            console.log("API está viva! 3001");
        });

    })

