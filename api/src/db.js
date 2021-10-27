const mongoose = require('mongoose');
// // // colocamos la url de conexión remota y el nombre de la base de datos
mongoose.connect('mongodb+srv://Prueba1:1234@pruebalogin.rjksy.mongodb.net/PruebaLogIn?retryWrites=true&w=majority', {
  useNewUrlParser: true, //No hace falta, la version actual de mongoose es estable, no tirar error
  useUnifiedTopology: true
})
.then(db => console.log("Database is conected"))
.catch(err => console.error(err));