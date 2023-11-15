// email-sender.js
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email_address',
    pass: 'your_password',
  },
});

// setup email data with unicode symbols
const mailOptions = {
  from: 'your_email_address',
  to: 'recipient_email_adress',
  subject: 'Test Email',
  text: 'Hello, this is an email!',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
