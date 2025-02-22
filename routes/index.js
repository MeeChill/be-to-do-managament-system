var express = require('express');
var router = express.Router();

//Welcome page

router.get('/', function (req, res) {
  res.send('Welcome to Node.js, Express and MySQL API');
});

module.exports = router;
