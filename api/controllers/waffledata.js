// const express = require('express');
// const router = express.Router();

var WAFFLE_COLLECTION = "waffle";



// {
//   "_id": <ObjectId>,
//   "headline": <string>,
//   "subtext": <string>,
//   "landingpage": <string>
//   }
// }

module.exports = function(app, db) {
 
  /* GET api listing. */
  app.get('/waffle',  (req, res) =>  {
        res.send('hey');


    database.collection(WAFFLE_COLLECTION).find({}).toArray(function(err,docs){
      if (err) {
        handleError(res, err.message, "failed to get any waffle this time");
      } else {
        res.status(200).json(docs);
      }
    }
  )

  });

  app.post("/waffle", function(req, res) {
    var newWaffle = req.body;
    res.send(newWaffle);
    
  });
};


//module.exports = router;