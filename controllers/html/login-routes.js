const router = require('express').Router();

// render login page
router.get('/', (req, res) => {
  res.render('login', {});
});

// post login to identify client

module.exports = router;
