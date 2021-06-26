const router = require('express').Router();

const userRoutes = require('./client-routes');
const hauskeeprRoutes = require('./hauskeepr-routes');
const professionRoutes = require('./profession-routes');
const appointmentRoutes = require('./appointment-routes');
const reviewRoutes = require('./review-routes');
const supportRoutes = require('./support-routes');
const contactRoutes = require('./contact-routes');

router.use('/clients', userRoutes);
router.use('/hauskeeprs', hauskeeprRoutes);
router.use('/professions', professionRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/reviews', reviewRoutes);
router.use('/support', supportRoutes);
router.use('/contact', contactRoutes);

module.exports = router;