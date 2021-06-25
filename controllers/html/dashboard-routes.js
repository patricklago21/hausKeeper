const router = require('express').Router();

// render dashboard page
router.get('/', (req, res) => {
  res.render('dashboard', {});
});


module.exports = router;
