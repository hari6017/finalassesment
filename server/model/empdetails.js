var mongoose = require('mongoose');
var schema = mongoose.Schema;

var empdetails = new schema({
wave : String,
name : String,
email : String,
phno : String,
giturl : String,
ecode : String,
edesg : String,
skill : String,
exp : String
});

module.exports = mongoose.model('Empdetails', empdetails);
