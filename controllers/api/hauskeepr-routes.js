const router = require('express').Router();
const { Hauskeepr } = require('../../models');

// get all Hauskeeprs
router.get('/', (req, res) => {
  Hauskeepr.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get Hauskeepr by id
router.get('/:id', (req, res) => {
  Hauskeepr.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a Hauskeepr
router.post('/', (req, res) => {
  Hauskeepr.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    zip_code: req.body.zip_code,
    state: req.body.state,
    profession_id: req.body.profession_id,
    hourly_rate: req.body.hourly_rate
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a Hauskeepr
router.put('/:id', (req, res) => {
  Hauskeepr.update(
    {
      // username: req.body.username, -- Once username is set, it can't be changed
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      address_line_1: req.body.address_line_1,
      address_line_2: req.body.address_line_2,
      city: req.body.city,
      zip_code: req.body.zip_code,
      state: req.body.state,
      profession_id: req.body.profession_id,
      hourly_rate: req.body.hourly_rate
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Hauskeepr found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a Hauskeepr
router.delete('/:id', (req, res) => {
  Hauskeepr.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Hauskeepr found with this id'});
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
