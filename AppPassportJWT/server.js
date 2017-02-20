// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var configApp = require('./config/main'); // get our config file
var configKey = require('./config/global'); // get our config file

// =======================
// connect to database ============
// =======================
var mongoose    = require('mongoose');
mongoose.connect(configKey.dbConnection); // 
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

// =======================
// configuration =========
// =======================
app = configApp.innitializeApp(app);

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
