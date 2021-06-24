const sequelize = require('../config/connection');
const { Profession } = require('../models');

const professiondata = [
  {profession_name: 'Home cleaner'},
  {profession_name: 'Window cleaner'},
  {profession_name: 'Carpet cleaner'},
  {profession_name: 'Gardener / Landscaper'},
  {profession_name: 'Cook'},
  {profession_name: 'Repairman'},
  {profession_name: 'Babysitter'},
  {profession_name: 'Electrician'},
  {profession_name: 'Plumber'}
];

const seedProfessions = () => Profession.bulkCreate(professiondata, {individualHooks: true});

module.exports = seedProfessions;
