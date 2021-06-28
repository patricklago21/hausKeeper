const router = require('express').Router();
const sendEmail = require('../../utils/contactus')

router.post("/", (req, res) => {
    const { hauskeepr_email, client_email, hauskeepr_name } = req.body;
    
    const from = "nellirism@gmail.com"; // this is the email set up to send the message from the app to the recepient of the email
    const to = "lou.arnaut@gmail.com"; // hauskeepr_email
    
    const to2 = "patricklago21@gmail.com"; // client_email

    const subject = "New Contact Request";

    const output1 = `
    <p>You have a scheduled appointment with the hausKeepr ${hauskeepr_name} </p>
    <h3>Contact Details</h3>
  `;
    sendEmail(to, from, subject, output1);

    const output2 = `
    <p>A client has scheduled an appointment with you. Log back in to see the appointment.</p>

  `;

    sendEmail(to2, from, subject, output2);
    res.render("sent");
});

module.exports = router;