// if the user is not logged in, the requested
// route will be redirected to the login page.
// upon successful login, the user will be
// redirected to the previously requested URL

module.exports = () => {
  return function secured  (req, res, next) {
    if (req.user) return next();
    req.session.returnTo = req.originalUrl;
    res.redirect('/login');
  };
};