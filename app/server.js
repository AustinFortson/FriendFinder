// Dependencies
// =============================================================
var express = require("express");
var path    = require("path");
var friends = require("./data/friends")

// Sets up the Express App
// =============================================================
var app     = express();
var PORT    = 3002;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// ===========================================
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  