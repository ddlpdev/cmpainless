// server.js
//for both
const express = require('express');
const path = require('path');

//for api
const http = require('http');
const bodyParser = require('body-parser');

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
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});




// Get our API routes
const api = require('./server/routes/api');

const apiApp = express();

// Parsers for POST data
apiApp.use(bodyParser.json());
apiApp.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
apiApp.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
apiApp.use('/api', api);

// Catch all other routes and return the index file
apiApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
apiApp.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(apiApp);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));


