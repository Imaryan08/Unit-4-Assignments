const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'faf4bb56820b51', // generated ethereal user
      pass: '3096ee9153825b', // generated ethereal password
    },
  });

  module.exports = transporter;