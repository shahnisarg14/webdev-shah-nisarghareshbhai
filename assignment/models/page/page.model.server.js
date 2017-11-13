var PageSchema = require('./page.schema.server');
var mongoose = require('mongoose');
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;

function createPage(page) {
  return PageModel.create(page);
}

function findPageById(pageId) {
  return PageModel.findOne({_id: pageId});
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.updateOne({_id: pageId}, page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId: websiteId});
}
