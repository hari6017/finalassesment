var express = require('express');
var router = express.Router();
var Empdetails = require('../model/empdetails');

router.post('/', function(req, res, next) {
console.log(req.body);
var data = req.body;
console.log("hi hari");
var change = new Empdetails(req.body);

change.save(function (err) {
  	if (err) {
  		return handleError(err);
  	}
  	else{
  		console.log("Saved to database");
  	}


});

});

router.get('/', function(req, res) {
 //res.render('index', { title: 'Express' });
Empdetails.find(function(err,data){
if(err)
{
console.log("error");
}
else {
  res.json(data);

}
});



});

router.put('/',function(req,res){
console.log("hari");
Empdetails.findOne({ecode : req.body.id},function(err,data){
    if(data)
{
console.log("done");
}
});
});








module.exports = router;
