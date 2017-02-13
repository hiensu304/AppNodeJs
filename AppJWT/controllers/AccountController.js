var User = require('../models/user');
//var Common = require('../public/Security');


module.exports = {
    Index:function(req, res) {
        User.find({}, function(err, users) {
            res.json(users);
        });
    },

    SignUp: function(req, res) {  
        if(!req.body.email || !req.body.password) {
            res.json({ success: false, message: 'Please enter email and password.' });
        } else {
            var newUser = new User({
            email: req.body.email,
            password: req.body.password
            });

            // Attempt to save the user
            newUser.save(function(err) {
            if (err) {
                return res.json({ success: false, message: 'That email address already exists.'});
            }
            res.json({ success: true, message: 'Successfully created new user.' });
        });
        }
    }
};