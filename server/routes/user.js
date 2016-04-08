// USER ROUTE - HANDLES CALLS IF USER IS VERIFIED

var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET
router.get('/', function(req, res) {
  // Is the user logged in?
  if(req.isAuthenticated()) {
    // send back user object from DB
    res.send(req.user);
  } else {
    // failure best handled on server, redirect here
    res.send(false);
  }
});

// Handle successful logins ??? --- From Scott's codebase, not sure if I need it, probably to verify log in
// router.get('/name', function(req,res,next){
//     console.log('Hi class! ', req.isAuthenticated());
//     var resUser = {
//         username: req.user.username,
//         firstname: req.user.firstname,
//         lastname: req.user.lastname,
//         datecreated: req.user.lastlogin
//     };
//     res.json(resUser);
// });

module.exports = router;
