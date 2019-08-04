const express = require('express')
const router  = express.Router();
const nodeMailer = require('nodemailer');
const { email, password } = require('../../config/keys');

// Validation
const validateSendEmail = require('../../validation/email');



router.post('/send-email', (req, res) => {
  // Validation
  const { errors, isValid } = validateSendEmail(req.body);
  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  } else {
    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: password
      }
    });
    let mailOptions = {
      from: req.body.email, // sender address
      to: email, // list of receivers
      subject: `E-mail send by ${req.body.email}`, // Subject line
      text: req.body.textarea // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error, 'error');
      }
      res.json({ success: true })
    });
  }
});

module.exports = router;