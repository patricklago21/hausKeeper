// import all models
const Client = require('./Client');
const Hauskeepr = require('./Hauskeepr');
const Review = require('./Review');
const Appointment = require('./Appointment');
const Profession = require('./Profession');

Client.hasMany(Review, {
    foreignKey: 'client_id'
});

Hauskeepr.hasMany(Review, {
    foreignKey: 'hauskeepr_id'
});

Review.belongsTo(Client, {
    foreignKey: 'client_id'
});

Review.belongsTo(Hauskeepr, {
    foreignKey: 'hauskeepr_id'
});

Client.hasMany(Appointment, {
    foreignKey: 'client_id'
});

Hauskeepr.hasMany(Appointment, {
    foreignKey: 'hauskeepr_id'
});

Appointment.belongsTo(Client, {
    foreignKey: 'client_id'
});

Appointment.belongsTo(Hauskeepr, {
    foreignKey: 'hauskeepr_id'
});

Hauskeepr.belongsTo(Profession, {
    foreignKey: 'profession_id'
});

module.exports = { Client, Hauskeepr, Review, Appointment, Profession };