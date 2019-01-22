// serve the user profile

const express = require('express');
const secured = require('../lib/middleware/secured');
const router = express.Router();

// Get user profile
router.get('/user', secured(), (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
});

export default router;