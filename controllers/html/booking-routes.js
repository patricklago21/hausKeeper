const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Hauskeepr, Profession, Review, Appointment, Client } = require('../../models');

// render booking page
router.get('/:id', (req, res) => {
  Hauskeepr.findOne({
    where: { id: req.params.id },
    attributes: { 
      exclude: ['password'],
      include: [
        [
          sequelize.literal('(SELECT AVG(stars) FROM review WHERE review.hauskeepr_id = hauskeepr.id)'),
          'rating'
        ]
      ]
    },
    include: [
      {
        model: Review,
        attributes: {
          include: ['id','review','client_id','stars','createdAt','updatedAt',
            [
              sequelize.literal('(SELECT username FROM client WHERE client.id = reviews.client_id)'),
              'client_username'
            ]
          ]
        }
      },
      {
        model: Appointment,
        attributes: ['id','datetime','client_id','hauskeepr_id','notes','status','hours','total_cost']
      },
      {
        model: Profession,
        attributes: ['profession_name']
      }
    ]
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({ message: 'No hauskeepr found with this id' });
      return;
    }

    const hauskeepr = dbData.get({ plain: true });
    res.render('booking', {
        hauskeepr,
        loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
