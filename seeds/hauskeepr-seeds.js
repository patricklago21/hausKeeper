const sequelize = require('../config/connection');
const { Hauskeepr } = require('../models');

const hauskeeprdata = [
  {
    username: 'ursula',
    email: 'ursula@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Ursula',
    last_name: 'Seawitch',
    date_of_birth: '08/17/1882',
    address_line_1: '111 Dark Cave',
    address_line_2: '',
    city: 'Under The Sea',
    zip_code: '00345',
    state: 'HI',
    profession_id: 3,
    hourly_rate: 12.75 
  },
  {
    username: 'Sebastian',
    email: 'sebastian@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Sebastian',
    last_name: 'Crab',
    date_of_birth: '08/17/1882',
    address_line_1: '10 Ocean Dr',
    address_line_2: '',
    city: 'Ocean City',
    zip_code: '00345',
    state: 'HI',
    profession_id: 1,
    hourly_rate: 16.75 
  },
  {
    username: 'Ariel',
    email: 'ariel@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Ariel',
    last_name: 'Mermaid',
    date_of_birth: '08/17/1882',
    address_line_1: '11 Ocean Dr',
    address_line_2: '',
    city: 'Ocean City',
    zip_code: '00345',
    state: 'HI',
    profession_id: 1,
    hourly_rate: 16.75 
  },
  {
    username: 'Erik',
    email: 'Erik@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Erik',
    last_name: 'Prince',
    date_of_birth: '08/17/1882',
    address_line_1: '11 Swanky Castle',
    address_line_2: '',
    city: 'Above The Sea',
    zip_code: '00345',
    state: 'HI',
    profession_id: 1,
    hourly_rate: 7.75 
  }
];

const seedHauskeeprs = () => Hauskeepr.bulkCreate(hauskeeprdata, {individualHooks: true});

module.exports = seedHauskeeprs;
