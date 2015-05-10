var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

module.exports = function(app, express) {
  app.use(bodyParser());
  app.use(session({
    secret: "ill never tell",
    resave: true,
    saveUninitialized: true
  }));

  app.use(express.static(path.join(__dirname, '../client')));

  require('./routes.js')(app);
}
