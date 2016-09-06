var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/update', function(req, res, next) {
  console.log("this is update");
});

router.post('/', function(req, res, next) {
// console.log(req.body.from);
// console.log(req.body.subject);
console.log(req.body);
});
module.exports = router;
