const router = require('express').Router();

// render home page
router.get('/', (req, res) => {
  res.render('homepage', {});
});


module.exports = router;
