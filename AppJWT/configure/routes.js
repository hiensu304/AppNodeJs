var express = require('express'),
apiRoutes = express.Router(),
auth = require('../controllers/AuthenticationController'),
account = require('../controllers/AccountController');

module.exports.initialize = function(app) {
        
    // =======================
    // routes ================
    // =======================
    // basic route
    apiRoutes.get('/', function(req, res) {
        res.send('Hello! The API is at http://localhost:8080/api');
    });

    // route to return all users (GET http://localhost:8080/api/users)
    apiRoutes.get('/users',account.Index );   


    apiRoutes.post('/signup',account.SignUp );
    
    // route to authenticate a user (POST http://localhost:8080/api/authenticate)
    apiRoutes.post('/authenticate',auth.Authenticate);
    /*apiRoutes.post('/authenticate', function(req, res) {
        // find the user
        User.findOne({
            name: req.body.name
        }, function(err, user) {

            if (err) throw err;

            if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                expiresIn : 60*60*24 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
                });
            }   

            }

        });
    });*/
    app.use(apiRoutes);
};