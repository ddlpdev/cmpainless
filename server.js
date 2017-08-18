// server.js
const express = require('express');
const path = require('path');
var mongodb = require("mongodb");
//import Promise from 'bluebird';




var ObjectID = mongodb.ObjectID;

const app = express();


// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());



// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

//setup DB
var db;

// const port = process.env.PORT || 3000;

// mongodb.MongoClient.connect(process.env.MONGODB_URI, { promiseLibrary: Promise })
//   .catch(err => console.error(err.stack))
//   .then(db => {
//     app.locals.db = db;
//     app.listen(process.env.PORT || 8080, () => {
//         //var port = server.address().port;
//       console.log(`Node.js app is listening`);
//     });
//   });


//Connect to the database before starting the application server.
 mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
  const api = require('./api/controllers/waffledata')(app,database);

  //use api app
    app.use('/api', api);



  //Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});



// Start the app by listening on the default
// Heroku port
//app.listen(process.env.PORT || 8080);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


