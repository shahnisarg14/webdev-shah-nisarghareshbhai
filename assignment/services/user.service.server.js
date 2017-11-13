var User = require("../models/user/user.model.server");

module.exports=function (app) {

  var userModel = require('../models/user/user.model.server');

  var users = [
    new User("123", "alice", "alice", "Alice", "Wonder"),
    new User("234", "bob", "bob", "Bob", "Marley"),
    new User("345", "charly", "charly", "Charly", "Garcia"),
    new User("456", "jannunzi", "jannunzi", "Jose", "Annunzi")
  ];

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid",findUserById);

  function createUser(req, res){
    var newUser = req.body;
    delete newUser._id;
    userModel
      .createUser(newUser)
      .then(function(user) {
        res.json(user);
      }, function(error) {
        console.log(error);
      });
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.params["userId"];
    userModel
      .updateUser(userId, user)
      .then(function(status) {
        res.send(status);
      });
  }
  function deleteUser(req, res){
    var userId = req.params['userId'];
    userModel
      .deleteUser(userId)
      .then(function(status) {
        res.send(status);
      });
  }

  function findUsers(req, res){
    var username=req.query["username"];
    var password=req.query["password"];
    if(username && password) {
      var promise = userModel
        .findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
      });
      return;
    }
    else if(username){
      var promise = userModel
        .findUserByUsername(username);
      promise.then(function (user) {
        res.json(user)
      });
      return;
    }
    var promise = userModel
      .findAllUsers();
    promise.then(function(users) {
      res.json(users)
    });
    res.json(users);
  }

  function findUserById(req, res) {
    const userId = req.params["uid"];
    var promise = userModel
      .findUserById(userId);
    promise.then(function(user) {
      res.json(user)
    });
  }

};

