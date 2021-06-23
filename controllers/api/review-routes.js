const router = require('express').Router();
const { Review } = require('../../models');

// get all Reviews
router.get('/', (req, res) => {
  Review.findAll({})
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get Review by id
router.get('/:id', (req, res) => {
  Review.findOne({
    where: { id: req.params.id }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a Review
router.post('/', (req, res) => {
  Review.create({
    client_id: req.body.client_id,
    hauskeepr_id: req.body.hauskeepr_id,
    review: req.body.review,
    stars: req.body.stars
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a Review
router.put('/:id', (req, res) => {
  Review.update(
    {
        // Only the review and the stars (rating) can be updated
        review: req.body.review,
        stars: req.body.stars
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Review found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a Review
router.delete('/:id', (req, res) => {
  Review.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Review found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
