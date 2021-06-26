const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Hauskeepr, Profession } = require('../../models');

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
                model: Profession,
                attributes: [
                    'profession_name'
                ]
            }]

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