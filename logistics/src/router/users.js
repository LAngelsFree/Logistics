var express = require('express');
var router = express.Router();

var User = requ

router.post("/login",function(res,req,next){
  var param = {
    username : req.body.username,
    password : req.body.password
  }
})

module.exports = router;
