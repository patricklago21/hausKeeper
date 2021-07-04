const router = require('express').Router();
const { Client, Review, Appointment } = require('../../models');

// get all clients
router.get('/', (req, res) => {
  Client.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get client by id
router.get('/:id', (req, res) => {
  Client.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['password'] }
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a client
router.post('/', (req, res) => {
  Client.create({
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
    state: req.body.state
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a client
router.put('/:id', (req, res) => {
  Client.update(
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
      state: req.body.state
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No client found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a client
router.delete('/:id', (req, res) => {
  Client.destroy({
    where: { id: req.params.id }
  })
  .then(dbData => {
    if(!dbData) {
      res.status(404).json({message:'No client found with this id'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  Client.findOne({
    where: { 
      username: req.body.username
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    const validPassword = dbData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbData.id;
      req.session.username = dbData.username;
      req.session.email = dbData.email;
      req.session.loggedIn = true;
      res.json({ user: dbData, message: 'You are now logged in!' });
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST /api/clients/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// GET /api/clients/username/:username
router.get('/username/:username', (req, res) => {
  Client.findOne({
      attributes: { 
          exclude: ['password']
      },
      where: {
        username: req.params.username
      }
    })
  .then(dbUserData => {
      if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this username' });
      return;
      }
      res.json(dbUserData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// GET /api/clients/email/:email
router.get('/email/:email', (req, res) => {
  Client.findOne({
      attributes: { 
          exclude: ['password']
      },
      where: {
        email: req.params.email
      }
    })
  .then(dbUserData => {
      if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this email' });
      return;
      }
      res.json(dbUserData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;