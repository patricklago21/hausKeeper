const sequelize = require('../config/connection');
const { Client } = require('../models');

const clientdata = [
  {
    username: 'spongebob',
    email: 'spongebob@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Spongebob',
    last_name: 'Squarepants',
    date_of_birth: '08/17/1882',
    address_line_1: '123 Main St',
    address_line_2: '',
    city: 'Bikini Bottom',
    zip_code: '00345',
    state: 'HI'
  },
  {
    username: 'patrick',
    email: 'patrick@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Patrick',
    last_name: 'Star',
    date_of_birth: '08/17/1882',
    address_line_1: '127 Main St',
    address_line_2: '',
    city: 'Bikini Bottom',
    zip_code: '00345',
    state: 'HI'
  },
  {
    username: 'squidward',
    email: 'squidward@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Squidward',
    last_name: 'Tentacle',
    date_of_birth: '08/17/1882',
    address_line_1: '119 Coral St',
    address_line_2: '',
    city: 'Bikini Bottom',
    zip_code: '00345',
    state: 'HI'
  },
  {
    username: 'sandy',
    email: 'sandy@gmail.com',
    password: 'p@55w0rd',
    first_name: 'Sandy',
    last_name: 'Cheeks',
    date_of_birth: '08/17/1882',
    address_line_1: '130 Coral St',
    address_line_2: '',
    city: 'Bikini Bottom',
    zip_code: '00345',
    state: 'HI'
  },
  {
    username: 'patricklago21',
    email: 'patricklago21@gmail.com',
    password: 'password',
    first_name: 'Patrick',
    last_name: 'Lago',
    date_of_birth: '08/17/1882',
    address_line_1: '130 Coral St',
    address_line_2: '',
    city: 'Oakland',
    zip_code: '00345',
    state: 'HI'
  }
];

const seedClients = () => Client.bulkCreate(clientdata, {individualHooks: true});

module.exports = seedClients;
