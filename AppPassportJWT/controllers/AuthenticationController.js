
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var UserModel = require('../models/user');
var configKey = require('../config/global');



// Authenticate the user and get a JSON Web Token to include in the header of future requests.
module.exports = {
    Authenticate:function(req, res) {  
        UserModel.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) throw err;

            if (!user) {
                res.send({ success: false, message: 'Authentication failed. User not found.' });
            } else {
                // Check if password matches
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        // Create token if the password matched and no error was thrown
                        var token = jwt.sign(user, configKey.secretKey, {
                            expiresIn: 10080 // in seconds
                        });
                        res.json({ success: true, token: 'JWT ' + token });
                    } else {
                        res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
                    }
                });
            }
        });
}
};

