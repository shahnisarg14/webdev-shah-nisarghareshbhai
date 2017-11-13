var mongoose = require('mongoose');
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
var UserModel = require('../user/user.model.server');

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(website) {
  return WebsiteModel.create(website);
}


function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({developerId: userId});
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findOne({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.updateOne({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.deleteOne({_id: websiteId});
}
