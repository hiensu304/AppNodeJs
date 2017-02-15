
module.exports = {
    GetData:function(req, res) {  
             
        passport.authenticate('jwt', { session: false }), function(req, res) {  
            res.send('It worked! User email is: ' + req.user.email + '.');
        }
        
    }
};