var User = require("../models/user/user.model.server");

module.exports=function (app) {

  var userModel = require('../models/user/user.model.server');
  var passport  = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRE,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };


  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid",findUserById);

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);
  app.get ('/facebook/login',
    passport.authenticate('facebook', { scope : 'email' }));
  app.get ('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/user',
      failureRedirect: '/login'
    }));

  passport.use(new LocalStrategy(localStrategy));
  passport.use(
    new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function localStrategy(usr, pass, done) {
    userModel
      .findUserByUsername(usr)
      .then(
        function(user) {
          if(user.username === usr && bcrypt.compareSync(pass, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(function(user) {
        if(user) { return done(null, user); } // already in db
        else { // if not, insert into db using profile info
          var names = profile.displayName.split(" ");
          var newFacebookUser = { lastName:  names[1],
            firstName: names[0],
            email:     profile.emails ? profile.emails[0].value:"",
            facebook: { id:    profile.id, token: token }
          };
          return userModel.createUser(newFacebookUser);
        }
      })
      .then(
        function(user){
          return done(null, user);
        }
      );
  }


  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
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

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
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

