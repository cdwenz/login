const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const User = require("../models/User");

//En vez de usar cookies para determinar si el usuario que navega por las distintas pestañas es válido y existe...
//Serializamos datos y deserializamos los mismos mediante passport.
passport.serializeUser((user, done) => {
    done(null, user.id);
}) //Esto se ejecuta una vez que tenga el usuario, cada pestaña nueva a la que se diriga, obtenemos el id del usuario.

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id); //Compara en la DB que el user.id coincida con uno válido y existente en la misma.
    done(null, user);
})

//Registro del usuario
passport.use("local-signup", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) =>{
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save(); //Guarda el usuario en la DB
    done(null, user)//Null para el error, el segundo parametro es el usuario
}));