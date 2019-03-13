// Dependency
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
//Default routing to home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//Routing to home
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//Routing to survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};