const router = require('express').Router();
const sendEmail = require('../../utils/contactus');

const sequelize = require('../../config/connection');
const { Hauskeepr, Client, Review, Appointment, Profession } = require('../../models');

router.get('/', (req,res) => {
    
});