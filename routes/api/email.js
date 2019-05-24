const express = require('express')
const router  = express.Router();
const nodeMailer = require('nodemailer');
const user = require('../../credential');



router.post('/send-email', (req, res) => {
  const me = user.email
  let transporter = nodeMailer.createTransport({
      host: user.email,
      port: 465,
      secure: true,
      auth: {
          user: user.email,
          pass: user.password
      }
  });
  let mailOptions = {
      from: req.body.email, // sender address
      to: me, // list of receivers
      text: req.body.text, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
          // res.render('index');
      });
  });

module.exports = router;