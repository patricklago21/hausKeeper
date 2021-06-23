const router = require('express').Router();

const userRoutes = require('./client-routes.js');

router.use('/clients', userRoutes);

module.exports = router;
