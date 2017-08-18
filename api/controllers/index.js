const waffleController = require('./waffledata');
module.exports = function(app, db) {
  waffleController(app, db);
  // Other route groups could go here, in the future
};