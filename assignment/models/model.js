var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/cs5610';

if(process.env.MLAB_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds127034.mlab.com:27034/heroku_6c6hclg4';
}

var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
