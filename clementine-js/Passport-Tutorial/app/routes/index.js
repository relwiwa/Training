'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

  // Used as middleware before handling requests to check login of user
  function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    else {
      res.redirect('/login');
    }
  }

  var clickHandler = new ClickHandler();
  
  app.route('/')
    .get(isLoggedIn, function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/login')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/login.html');
    });

  /*  Passport exposes a logout() function on req (also aliased as
      logOut()) that can be called from any route handler which
      needs to terminate a login session. Invoking logout() will
      remove the req.user property and clear the login
      session (if any). */
  app.route('/logout')
    .get(function (req, res) {
      req.logout();
      res.redirect('/login');
    });

  app.route('/profile')
    .get(isLoggedIn, function (req, res) {
      res.sendFile(process.cwd() + '/public/profile.html');
    });


  /*  When the /auth/github route is requested and Passport authenticates
      successfully with GitHub, Passport creates a user property on the
      Express req object. This object contains all of the fields
      requested from the GitHub API (i.e. username, display name,
      number of repos, ID, etc.).
      When the route is requested, the ID from this user object is
      passed as part of the URL (i.e. the URL would look like
      /api/1234567). This makes these requested URLs unique to
      each user. */
  app.route('/api/:id')
    .get(isLoggedIn, function (req, res) {
      res.json(req.user.github);
    });

  app.route('/auth/github')
    .get(passport.authenticate('github'));

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

  app.route('/api/:id/clicks')
    .get(isLoggedIn, clickHandler.getClicks)
    .post(isLoggedIn, clickHandler.addClick)
    .delete(isLoggedIn, clickHandler.resetClicks);
};