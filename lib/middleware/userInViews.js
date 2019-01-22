// conditionally render content depending on user login status

module.exports = () => {
  return (req, res, next) => {
    res.locals.user = req.user;
    next();
  };
};