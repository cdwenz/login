const express = require('express');
const routes = require('./routes/index.js');
const morgan = require("morgan");
const passport = require("passport");
// const session = require("express-session");
// const flash = require("connect-flash");
const cors= require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
//Initializations
const server = express();

require("./passport/jwt")
require("./passport/local-auth")
require("../authenticate")

dotenv.config()

server.name = "API";
server.use(cors());
//Extra configs

// server.use(session({
//   secret: "mysecretsession",
//   resave: false,
//   saveUninitialized: false
// }));
//  //Investigar en Documentacion de session!!
// server.use(flash());

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


console.log("ENV COOKIE", process.env.COOKIE_SECRET)
server.use(cookieParser(process.env.COOKIE_SECRET))

server.use(passport.initialize());
// server.use(passport.session());



// server.use((req, res, next)=>{
//   server.locals.signupMessage = req.flash("signupMessage");
//   server.locals.signinMessage = req.flash("signinMessage");
//   server.locals.user = req.user;
//   next();
// })


//

server.use('/', routes);

module.exports = server;