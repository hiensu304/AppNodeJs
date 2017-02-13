// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var configApp = require('./server/configureApp'); // get our config file
var configKey = require('./server/configureConstant'); // get our config file
var mongoose    = require('mongoose');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(configKey.dbConnection); // connect to database
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

app = configApp.innitializeApp(app);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
