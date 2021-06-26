const sequelize = require('../config/connection');
const seedClients = require('./client-seeds');
const seedHauskeeprs = require('./hauskeepr-seeds');
const seedAppointments = require('./appointment-seeds');
const seedProfessions = require('./profession-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedProfessions();
    await seedClients();
    await seedHauskeeprs();
    await seedAppointments();
    await seedReviews();

    process.exit(0);
};

seedAll();