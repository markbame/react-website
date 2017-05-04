var domain = 'www.petabenyu.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

exports.email = (req, res, next) => { console.log('req', req.emailSubject)
  var data = {
    from: req.emailFrom,
    to: req.emailTo,
    subject: req.emailSubject,
    html: req.emailMessage
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
