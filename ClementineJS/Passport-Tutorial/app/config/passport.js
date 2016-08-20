'use strict';

var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/users');
var configAuth = require('./auth');

/*  Functionality of serialize and deserialize functions:
  - done is a function native to Passport, which tells Passport to
    proceed in the authentication process.
  - When done(null, user.id) is called, Passport takes this information
    and passes it to the authenticate function.
  - The information is stored in the req.session.passport.user user object.
  - When subsequent calls are made, Passport will deserialize this
    information, and search our User model for the deserialized ID.
    This information is then stored in the req.user object. */
module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL
  }, function (token, refreshToken, profile, done) {
    // wait for response asychnchronously
    process.nextTick(function() {
      // look for user in our database
      User.findOne({
        'github.id': profile.id
      }, function (err, user) {
        if (err) {
          return done(err);
        }
        // user exists in our database
        if (user) {
          return done(null, user);
        }
        // user does not exist in our database, create new user
        else {
          var newUser = new User();
          newUser.github.id = profile.id;
          newUser.github.username = profile.username;
          newUser.github.displayName = profile.displayName;
          newUser.github.publicRepos = profile._json.public_repos;
          newUser.nbrClicks.clicks = 0;

          newUser.save(function (err) {
            if (err) {
              throw new Error('Error adding new user to database');
            }

            return done(null, newUser);
          });
        }
      });
    });
  }));

};