const sequelize = require('../config/connection');
const { Appointment } = require('../models');

const appointmentdata = [
  {
    datetime: '07/01/2021 17:00',
    client_id: 3,
    hauskeepr_id: 3,
    notes: 'Please clean my house, I\'m messy',
    status: 'Scheduled',
    hours: '3',
    total_cost: '50.25'
  }
];

const seedAppointments = () => Appointment.bulkCreate(appointmentdata, {individualHooks: true});

module.exports = seedAppointments;
