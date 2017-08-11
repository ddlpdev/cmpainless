const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/waffle', (req, res) => {
  res.send('test is working\n');
});

module.exports = router;