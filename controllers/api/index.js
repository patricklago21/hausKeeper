const router = require('express').Router();

const userRoutes = require('./client-routes.js');
const hauskeeprRoutes = require('./hauskeepr-routes.js');
const professionRoutes = require('./prefession-routes.js');

router.use('/clients', userRoutes);
router.use('/hauskeeprs', hauskeeprRoutes);
router.use('/professions', professionRoutes);

module.exports = router;
