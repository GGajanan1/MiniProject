const passport = require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../Model/user')
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!bcrypt.compare(password,user.password)) { return done(null, false); }
        return done(null, user);
      });
    }
));