var express = require('express');
var router = express.Router();
var Empdetails = require('../model/empdetails');

router.get('/',function(req,res,next){
 console.log('hai');
 console.log(req.body);
var _id =req.body;
Empdetails.findById(_id, function(err,data){
   if(err)
   {
     throw err;
   }
   else
   {
     console.log("message got");
     res.json(data);
   }
 });


});

module.exports = router;
