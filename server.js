// server.js
const express = require('express');
const path = require('path');

var phenomenaSingular = [ 'wearable creativity', 'a room of puppies', 'the lack of biscuits in meetings', 'live Grinder-streaming'];
var issues = ['big data', 'the climate conundrum', 'the future of creativity', 'the old-agency model', 'the talent crisis', 'the SnapChat generation','client/agency relationships'];
var verbbits = ['killing', 'stifling', 'the answer to', 'the key to', 'the future of'];


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

/* GET api listing. */
app.get('/api/waffle',  (req, res) =>  {

    thePhenomenon = phenomenaSingular[Math.floor(Math.random() * phenomenaSingular.length)];
    theIssue = issues[Math.floor(Math.random() * issues.length)];
    theVerbbit = verbbits[Math.floor(Math.random() * verbbits.length)];
    
    
    thewaffle = {
        thewaffle: 'Is '+thePhenomenon+' '+theVerbbit+' '+theIssue+'?'
    }

    

    res.status(200).json(thewaffle);

});


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
//app.listen(3000);


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


