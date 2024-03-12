const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: 'your_email_service_provider', // e.g., 'gmail'
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password'
  }
});

//contenu de l'email
let mailOptions = {
  from: 'your_email_address',
  to: 'recipient_email_address',
  subject: 'Test Email',
  text: 'This is a test email from Node.js using Nodemailer.',
  html: '<h1>Hello from Node.js!</h1><p>This is a test email from Node.js using Nodemailer.</p>'
};

//email sender
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
