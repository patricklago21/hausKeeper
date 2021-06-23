const router = require('express').Router();

const userRoutes = require('./client-routes');
const hauskeeprRoutes = require('./hauskeepr-routes');
const professionRoutes = require('./profession-routes');
const appointmentRoutes = require('./appointment-routes');
const reviewRoutes = require('./review-routes');

router.use('/clients', userRoutes);
router.use('/hauskeeprs', hauskeeprRoutes);
router.use('/professions', professionRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
