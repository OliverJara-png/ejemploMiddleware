const express = require('express');
const router = express.Router();
const logRouteAccess = require('./middleware');

router.get('/', logRouteAccess, (req, res) => {
    res.send('Estás en la ruta 2');
});

module.exports = router;
