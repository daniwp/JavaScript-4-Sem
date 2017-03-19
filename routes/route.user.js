var express = require('express');
var router = express.Router();
var User = require('../models/model.user.js');


router.post('/register', function (req, res, next) {

    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please provide an email and password.'});
    } else {
        User.findOne({username: req.body.email}, function (err, user) {
            if (err) {
                res.json({success: false, msg: 'An unexpected error occurred.'});
            }
            if (user) {
                res.json({success: false, msg: 'A user with that email already exists.'});
            } else {
                var newUser = new User({
                    email: req.body.email,
                    password: req.body.password
                });

                User.addUser(newUser, function (err) {
                   if (err) {
                       res.json({success: false, msg: 'An unexpected error occurred.'});
                   } else {
                       res.json({success: true, msg: 'User successfully created.'})
                   }
                });
            }
        });
    }
});

// CREATE Client
router.post('/', function (req, res) {

});

module.exports = router;

