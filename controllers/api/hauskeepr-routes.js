const router = require('express').Router();
const { HausKeepr } = require('../../models');

// get all HausKeeprs
router.get('/', (req, res) => {
  HausKeepr.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get HausKeepr by id
router.get('/:id', (req, res) => {
  HausKeepr.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a HausKeepr
router.post('/', (req, res) => {
  HausKeepr.create({
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

// update a HausKeepr
router.put('/:id', (req, res) => {
  HausKeepr.update(
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
      res.status(404).json({message:'No HausKeepr found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a HausKeepr
router.delete('/:id', (req, res) => {
  HausKeepr.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No HausKeepr found with this id'});
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
