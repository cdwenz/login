const express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RouteDefault = require ("./components/routeDefault");



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", RouteDefault)


module.exports = router;
