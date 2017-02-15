var express = require('express'),
apiRoutes = express.Router(),
auth = require('../controllers/AuthenticationController'),
account = require('../controllers/AccountController');
dashboard = require('../controllers/DashboardController');
module.exports.initialize = function(app,passport) {
        
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
    
    // Protect dashboard route with JWT
    apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {  
        res.send('It worked! User id is: ' + req.user._id + '.');
    });
// apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {  
//         var User = require('../models/user');
//         User.find({}, function(err, users) {
//             res.json(users);
//             //res.send('It worked! User id is: ' + 
//         });
//     });

    app.use(apiRoutes);
};