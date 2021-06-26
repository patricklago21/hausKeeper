const router = require('express').Router();

// render booking page
router.get('/', (req, res) => {
    res.render('support', {});
});


module.exports = router;