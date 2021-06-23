const router = require('express').Router();
const { Profession } = require('../../models');

// get all Professions
router.get('/', (req, res) => {
  Profession.findAll({})
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get Profession by id
router.get('/:id', (req, res) => {
  Profession.findOne({
    where: { id: req.params.id }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a Profession
router.post('/', (req, res) => {
  Profession.create({
    profession_name: req.body.profession_name
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a Profession
router.put('/:id', (req, res) => {
  Profession.update(
    {
        profession_name: req.body.profession_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Profession found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a Profession
router.delete('/:id', (req, res) => {
  Profession.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No Profession found with this id'});
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
