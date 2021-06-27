const router = require('express').Router();
const sendEmail = require('../../utils/contactus')

router.post("/", (req, res) => {
    const { email, name } = req.body;
    console.log(email);
    const from = "nellirism@gmail.com"; // this is the email set up to send the message from the app to the recepient of the email
    const to = email; // this is the email set up to receive the email from the app.
    const to2 = "mateocannway@gmail.com"; //for testing purposes ... get the email from the loggedin user through his session cookies. 

    const subject = "New Contact Request";

    const output1 = `
    <p>You have a scheduled appointment with the hausKeepr ${name} </p>
    <h3>Contact Details</h3>

  `;
    sendEmail(to, from, subject, output1);

    const output2 = `
    <p>You have a scheduled appointment with a Client</p>
    <h3>Contact Details</h3>

  `;

    sendEmail(to2, from, subject, output2);
    res.render("sent");
});

module.exports = router;