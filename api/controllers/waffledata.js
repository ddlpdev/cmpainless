const express = require('express');
const router = express.Router();

var WAFFLE_COLLECTION = "waffle";



// {
//   "_id": <ObjectId>,
//   "headline": <string>,
//   "subtext": <string>,
//   "landingpage": <string>
//   }
// }


/* GET api listing. */
router.get('/waffle', (req, res) => {
  res.send('test is working\n');


  db.collection(WAFFLE_COLLECTION).find({}).toArray(function(err,docs){
    if (err) {
      handleError(res, err.message, "failed to get any waffle this time");
    } else {
      res.status(200).json(docs);
    }
  }
)

});

router.post("/waffle", function(req, res) {
  var newWaffle = req.body;

  if (!req.body.headline) {
    handleError(res, "Invalid user input", "Must provide a headline.", 400);
  }

  db.collection(WAFFLE_COLLECTION).insertOne(newWaffle, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new waffle.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

module.exports = router;