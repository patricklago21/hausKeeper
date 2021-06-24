const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewdata = [
  {
    client_id: 3,
    hauskeepr_id: 3, 
    review: 'Ariel is great! I love how detailed and fast she was while cleaning my water fountain. She used her tail? To sweep, very efficient!',
    stars: 5
  }
];

const seedReviews = () => Review.bulkCreate(reviewdata, {individualHooks: true});

module.exports = seedReviews;
