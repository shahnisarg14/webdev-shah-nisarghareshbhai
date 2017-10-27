var Page = require("../models/page.model.server");

module.exports = function(app) {
  var pages = [
    new Page("321", "Post 1", "456", "Lorem"),
    new Page("432", "Post 2", "456", "Lorem"),
    new Page("543", "Post 3", "456", "Lorem")
  ];

  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  function createPage(req, res) {
    const page = req.body;
    const newPage = new Page(page._id, page.name, page.websiteId, page.description);
    pages.push(newPage);
    res.json(newPage);
  }
  function findAllPagesForWebsite(req, res){
    var websiteId = req.params["wid"];
    var list = [];
    for (var x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === websiteId) {
        list.push(pages[x]);
      }
    }
    res.json(list);
  }
  function findPageById(req, res) {
    const pageId = req.params["pid"];
    const page = pages.find(function (page) {
      return page._id === pageId
    });
    res.json(page);
  }
  function updatePage(req, res){
    const pageId = req.params["pid"];
    const updatedPage = req.body;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages[x] = updatedPage;
        res.json(pages);
        return;
      }
    }
  }
  function deletePage(req, res){
    const pageId = req.params["pid"];
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages.splice(x, 1);
        res.json(pages);
      }
    }
  }
}
