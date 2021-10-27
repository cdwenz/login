const mongoose = require('mongoose');
// // // colocamos la url de conexión remota y el nombre de la base de datos
mongoose.connect('mongodb+srv://Prueba1:1234@pruebalogin.rjksy.mongodb.net/PruebaLogIn?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});