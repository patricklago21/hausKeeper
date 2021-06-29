const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Appointment, Hauskeepr, Review, Client, Profession } = require('../../models');

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    html: text,
  };

  sgMail.send(msg, function (err, result) {
    if (err) {
      console.log("Email Not Sent Error Occured");
    } else {
      console.log("Email was Sent");
    }
  });
};

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
    client_id: req.session.user_id,
    hauskeepr_id: req.body.hauskeepr_id,
    notes: req.body.notes,
    status: req.body.status,
    hours: req.body.hours,
    total_cost: req.body.total_cost
  })
    .then(dbData => {
      Hauskeepr.findOne({
        where: { id: req.body.hauskeepr_id },
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
              include: ['id', 'review', 'client_id', 'stars', 'createdAt', 'updatedAt',
                [
                  sequelize.literal('(SELECT username FROM client WHERE client.id = reviews.client_id)'),
                  'client_username'
                ]
              ]
            }
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


          const from = "nellirism@gmail.com"; // this is the email set up to send the message from the app to the recepient of the email
          const to = req.session.email; // client's email 

          const subject = `You have requested an appointment with ${dbData.username}`;

          const output1 = `
          <h3>Thank you for booking a hausKeepr</h3>
          <p>You have a scheduled appointment with ${dbData.first_name} ${dbData.last_name}. Once they have received it, they can accept or reschedule your appointment.</p>
          <h3>Contact Details</h3>
          <p>Email: ${dbData.email}</p>
          `;
          
          sendEmail(to, from, subject, output1);

          const to2 = dbData.email; // hauskeepr's email 
          const subject2 = `A client has requested an appointment with you`;

          const output2 = `
          <h3>You have a new appointment request in hausKeepr</h3>
          <p>Log back in to accept or reschedule your appointment.</p>
          `;

          sendEmail(to2, from, subject2, output2);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

      res.json(dbData);
    })
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
      if (!dbData) {
        res.status(404).json({ message: 'No Appointment found with this id' });
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
      if (!dbData) {
        res.status(404).json({ message: 'No Appointment found with this id' });
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
