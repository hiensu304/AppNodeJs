var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var routes = require('./routes');
var configKey = require('../server/configureConstant');

module.exports = {    
    innitializeApp: 
        function(app) {
        
            app.set('superSecret', configKey.secretKey); // secret variable

            //use body parser so we can get info from POST and/or URL parameters 
            app.use(bodyParser.urlencoded({extended:false}));
            app.use(bodyParser.json());

            // use morgan to log requests to the console
            app.use(morgan('dev'));
            routes.initialize(app);
            return app;
        }
};
