const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./html/');

router.use('/html', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
