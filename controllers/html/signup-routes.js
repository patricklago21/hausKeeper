const router = require('express').Router();

// render signup page
router.get('/', (req, res) => {
  res.render('signup', {});
});

// post signup to create client

module.exports = router;
