const router = require('express').Router();

const userRoutes = require('./client-routes.js');
const hauskeeprRoutes = require('./hauskeepr-routes.js');

router.use('/clients', userRoutes);
router.use('/hauskeeprs', hauskeeprRoutes);

module.exports = router;
