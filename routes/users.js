var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user1', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user2', function(req, res, next) {
  res.send('respond with a different resource');
});


module.exports = router;
