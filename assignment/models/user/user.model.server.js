var UserSchema = require('./user.schema.server');
var mongoose = require('mongoose');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findAllUsers = findAllUsers;
UserModel.deleteUser = deleteUser;
UserModel.updateUser = updateUser;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});

}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  return UserModel.find();
}

function updateUser(userId, user) {
  return UserModel.updateOne({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id: userId});
}
