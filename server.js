// server.js
const express = require('express');
const path = require('path');

var phenomena = [ 'wearable creativity', 'a room of puppies'];
var issues = ['big data', 'the climate conundrum'];
var verbbits = ['killing'];


var waffledata = [
    {
        id: 1,
        title: "the titile",
        subtext: "this is the subtext",
        landingpage: "this is the landing stuff"
    },
    {
        id: 2,
        title: "the titile2",
        subtext: "this is the subtext2",
        landingpage: "this is the landing stuff2"
    },
    {
        id: 2,
        title: "the titile2",
        subtext: "this is the subtext2",
        landingpage: "this is the landing stuff2"
    },
    {
        id: 2,
        title: "the titile2",
        subtext: "this is the subtext2",
        landingpage: "this is the landing stuff2"
    },
    {
        id: 2,
        title: "the titile2",
        subtext: "this is the subtext2",
        landingpage: "this is the landing stuff2"
    }
]





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

    thePhenomenon = phenomena[Math.floor(Math.random() * phenomena.length)];
    theIssue = issues[Math.floor(Math.random() * issues.length)];
    theVerbbit = verbbits[Math.floor(Math.random() * verbbits.length)];
    
    
    thewaffle = {
        thewaffle: 'Is '+thePhenomenon+' '+theVerbbit+' '+theIssue
    }

    

    res.status(200).json(thewaffle);

});


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


