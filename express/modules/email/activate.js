
var sendEmail = require("./email").email;

exports.activateUser = (req, res, next) => {
  req.emailFrom = "Staff <noreply@abenyu.com>"
  req.emailTo = "gearsoflife.mark@gmail.com"
  req.emailSubject = "Activate"
  req.emailMessage = 'Please activate your account through this <a href="'+global.site+'/activate/1203123">link</a>'
  sendEmail(req, res, next)
}
