var User = require("../models/user/user.model.server");

module.exports=function (app) {

  var userModel = require('../models/user/user.model.server');
  var passport  = require('passport');
  var LocalStrategy = require('passport-local').Strategy;

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid",findUserById);

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);

  passport.use(new LocalStrategy(localStrategy));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function localStrategy(usr, pass, done) {
    userModel
      .findUserByCredentials(usr, pass)
      .then(
        function(user) {
          if(user.username === usr && user.password === pass) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }

  function register(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function(user){
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

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

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }


};

