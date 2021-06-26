const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Hauskeepr, Profession, Review, Appointment } = require('../../models');

// render dashboard page
router.get('/', (req, res) => {
    Hauskeepr.findAll({
            attributes: {
                exclude: ['password'],
                include: [
                    [
                        sequelize.literal('(SELECT AVG(stars) FROM review WHERE review.hauskeepr_id = hauskeepr.id)'),
                        'rating'
                    ]
                ]
            },
            include: [{
                    model: Review,
                    attributes: ['id', 'review', 'stars', 'createdAt', 'updatedAt']
                },
                {
                    model: Appointment,
                    attributes: ['id', 'datetime', 'client_id', 'hauskeepr_id', 'notes', 'status', 'hours', 'total_cost']
                },
                {
                    model: Profession,
                    attributes: ['profession_name']
                }
            ]
        })
        .then(dbData => {
            const hauskeeprs = dbData.map(hauskeepr => hauskeepr.get({ plain: true }));
            console.log(dbData);
            res.render('dashboard', {
                hauskeeprs,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;