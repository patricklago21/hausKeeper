const router = require('express').Router();

const homeRoutes = require('./home-routes');
const signupRoutes = require('./signup-routes');
const loginRoutes = require('./login-routes');

router.use('/', homeRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;