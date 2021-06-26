const router = require('express').Router();
const sendEmail = require('../../utils/contactus')

router.post("/sendemail", (req, res) => {
    const { name, company, email, message } = req.body;

    const from = "nellirism@gmail.com"; // this is the email i set up to send the message from the app to the mateocannway@gmail.com from SendGrid
    const to = "mateocannway@gmail.com"; // this is the email i set up to receive the email from the app. 

    const subject = "New Contact Request";

    const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Surname: ${company}</li>
      <li>Email: ${email}</li>
      <li>Email: ${message}</li>
    </ul>
  `;

    sendEmail(to, from, subject, output);
    res.render("sent");
});

module.exports = router;