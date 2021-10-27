const server = require('./src/app.js');
// const connection = require('./src/db')
require("./src/db")
const User = require('./src/models/User');
require('dotenv').config();
const {PORT} = process.env;

server.listen(PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`);
  });

const user = new User({ name: 'LucianoPeruano' }); // crea la entidad
user.save(); // guarda en bd