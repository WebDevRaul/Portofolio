const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const user = require('./credential');

const app = express();

app.set('view engine', 'ejs');


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', function (req, res) {
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

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));