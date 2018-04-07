var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/', (req, res, next)=> {
  db.collection('users').findOne({
    "username":req.body.username  
  }).then(user=>{
    if(user){
      console.log(user)
      return user; 
    }
    else{
      console.log('user not found.')
    }
  })


});

module.exports = router;
