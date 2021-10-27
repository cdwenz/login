const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs"); //Para encriptar la contra

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

//Encriptacion
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

//Comparacion de la contraseña que puso el usuario con la de la DB encriptada
userSchema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('Users', userSchema);

module.exports = User;