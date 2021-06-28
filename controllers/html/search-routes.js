const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Hauskeepr, Profession, Review, Appointment } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require('sequelize');

// /search?q=search%20query
router.get('/:q', withAuth, (req, res) => {
    Hauskeepr.findAll({
            where: {
                [Op.or]: [ 
                    {username: { [Op.like]: '%'+req.params.q+'%' }},
                    {email: { [Op.like]: '%' + req.params.q + '%' }},
                    {first_name: { [Op.like]: '%' + req.params.q + '%' }},
                    {last_name: { [Op.like]: '%' + req.params.q + '%' }},
                    {city: { [Op.like]: '%' + req.params.q + '%' }},
                    // {profession_name: { [Op.like]: '%' + req.params.q + '%' }}
                ]
            },
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

// /search - all results
router.get('/', withAuth, (req, res) => {
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