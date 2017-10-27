var User = require("../models/user.model.server");

module.exports=function (app) {
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
    const user = req.body;
    const newUser = new User(user._id, user.username, user.password, user.firstName, user.lastName);
    users.push(newUser);
    res.json(newUser);
  }

  function updateUser(req, res) {
    const user = req.body;
    const userId = req.params["uid"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i] = user;
        res.json(users);
      }
    }
  }
  function deleteUser(req, res){
    const userId = req.params["uid"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i,1);
        res.json(users);
      }
    }
  }
  function findUsers(req, res){
    const username=req.query["username"];
    const password=req.query["password"];
    if(username && password) {
      const user = users.find(function(user){
        return user.username === username && user.password === password;
      });
      if(user){
        res.json(user);
      } else{
        res.json({});
      }
      return;
    }
    else if(username){
      const user = users.find(function (user){
        return user.username === username;
      });
      if(user){
        res.json(user);
      } else{
        res.json({});
      }
      return;
    }
    res.json(users);
  }
  function findUserById(req, res) {
    const userId = req.params["uid"];
    const user = users.find(function (user) {
      return user._id === userId
    });
    res.json(user);
  }

};

