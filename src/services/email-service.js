'use strict'

const config = require('../config');
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async(to, subject, body) => {
  sendgrid.send({
    to: to,
    from: 'prmorais_13@hotmail.com',
    subject: subject,
    html: body
  });
}