const mongoose = require('mongoose');
// const bcrypt = require("bcrypt-nodejs"); //Para encriptar la contra
const passportLocalMongoose = require('passport-local-mongoose');


const Session = new mongoose.Schema({
  refreshToken: {
    type: String,
    default: "",
  },
})


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  authStrategy: {
    type: String,
    default: "local",
  },
  refreshToken: {
    type: [Session],
  },
});

userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

//Encriptacion
// userSchema.methods.encryptPassword = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
// }

// //Comparacion de la contraseña que puso el usuario con la de la DB encriptada
// userSchema.methods.comparePassword = function(password){
//   return bcrypt.compareSync(password, this.password)
// }

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('Users', userSchema);

module.exports = User;