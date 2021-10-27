const express = require('express');
const routes = require('./routes/index.js');
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");


//Initializations
const server = express();

server.name = "API";

//Extra configs
server.use(session({
  secret: "mysecretsession",
  resave: false,
  saveUninitialized: false
})); //Investigar en Documentacion de session!!
server.use(flash());
server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next)=>{
  server.locals.signupMessage = req.flash("signupMessage");
  server.locals.signinMessage = req.flash("signinMessage");
  server.locals.user = req.user;
  next();
})

server.use(morgan("dev"))
server.use(express.json());
server.use(express.urlencoded({ extended: false})); //Esto nos permite recibir los datos desde el cliente (el formulario de register por ejemplo)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//

server.use('/', routes);

module.exports = server;