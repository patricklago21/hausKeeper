const router = require('express').Router();

const homeRoutes = require('./home-routes');
const signupRoutes = require('./signup-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');
const bookingRoutes = require('./booking-routes');
const supportRoutes = require('./support-routes');

router.use('/', homeRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/booking', bookingRoutes);
router.use('/support', supportRoutes);

module.exports = router;