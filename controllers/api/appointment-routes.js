const router = require('express').Router();
const { Appointment } = require('../../models');

// get all Appointments
router.get('/', (req, res) => {
  Appointment.findAll({})
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get Appointment by id
router.get('/:id', (req, res) => {
  Appointment.findOne({
    where: { id: req.params.id }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a Appointment
router.post('/', (req, res) => {
  Appointment.create({
    datetime: req.body.datetime,
    client_id: req.body.client_id,
    hauskeepr_id: req.body.hauskeepr_id,
    notes: req.body.notes,
    status: req.body.status,
    hours: req.body.hours,
    total_cost: req.body.total_cost
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a Appointment
router.put('/:id', (req, res) => {
  Appointment.update(
    {
        datetime: req.body.datetime,
        client_id: req.body.client_id,
        hauskeepr_id: req.body.hauskeepr_id,
        notes: req.body.notes,
        status: req.body.status,
        hours: req.body.hours,
        total_cost: req.body.total_cost
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Appointment found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a Appointment
router.delete('/:id', (req, res) => {
  Appointment.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Appointment found with this id'});
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
