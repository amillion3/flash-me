// handle authentication

const express = require('express');
const router = express.Router();
const passport = require('passport');

// Perform login, after login, Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
}), (req, res) => {
  res.redirect('/');
});

// Perform final stage of auth and redirect to
// previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', function (err, user, info) {
    if (err) return next(err);
    if (!user) return res.redirect('/login');
    req.logIn(user, (err) => {
      if (err) return next(err);
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || '/user');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

export default router;