var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var routes = require('./routes');
var configKey = require('../config/global');
var passport = require('passport'); 
var passportApp = require('../config/passport');
module.exports = {    
    innitializeApp: 
        function(app) {
        
            app.set('superSecret', configKey.secretKey); // secret variable

            //use body parser so we can get info from POST and/or URL parameters 
            app.use(bodyParser.urlencoded({extended:false}));
            app.use(bodyParser.json());

            // use morgan to log requests to the console
            app.use(morgan('dev'));
            
            // Initialize passport for use
            app.use(passport.initialize());  
            // Bring in defined Passport Strategy
            passportApp(passport);    

            routes.initialize(app,passport);
            return app;
        }
};
