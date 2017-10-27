var Website = require("../models/website.model.server");

module.exports = function(app){
  var websites = [
    new Website("123", "Facebook", "456", "Lorem"),
    new Website("234", "Tweeter", "456", "Lorem"),
    new Website("456", "Gizmodo", "456", "Lorem"),
    new Website("890", "Go", "123", "Lorem"),
    new Website("567", "Tic Tac Toe", "123", "Lorem"),
    new Website("678", "Checkers", "123", "Lorem"),
    new Website("789", "Chess", "234", "Lorem"),
  ];

  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);

  function createWebsite(req, res){
    const website = req.body;
    const newWebsite = new Website(website._id, website.name, website.developerId, website.description);
    websites.push(newWebsite);
    console.log(newWebsite);
    res.json(newWebsite);
  }
  function findAllWebsitesForUser(req, res){
    var userId = req.params["uid"];
    var list = [];
    for (var x = 0; x < websites.length; x++) {
      if (websites[x].developerId === userId) {
        list.push(websites[x]);
      }
    }
    res.json(list);
  }
  function findWebsiteById(req, res) {
    const websiteId = req.params["wid"];
    const website = websites.find(function (website) {
      return website._id === websiteId
    });
    res.json(website);
  }
  function updateWebsite(req, res){
    const websiteId = req.params["wid"];
    const updatedWebsite = req.body;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites[x] = updatedWebsite;
        res.json(websites);
        return;
      }
    }
  }
  function deleteWebsite(req, res){
    const websiteId = req.params["wid"];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites.splice(x, 1);
        res.json(websites);
      }
    }
  }
}
