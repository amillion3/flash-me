module.exports = (app, db) => {
  // GET one user authid by user id
  app.get('/userauth/:id', (req, res) => {
    const userid = req.params.id;

    db.users.find({
      where: { userid }
    })
      .then(user => {
        res.json(user);
      });
  });

  // POST single user authid
  app.post('/userauth', (req, res) => {
    const authid = req.body.authid;

    db.users.create({
      authid
    })
      .then(newUser => {
        res.json(newUser);
      })
  });

  // PATCH single user authid
  app.patch('/userauth/:id', (req, res) => {
    const userid = req.params.id;
    const incomingUpdates = req.body.updates;

    db.users.find({
      where: { userid }
    })
      .then(user => {
        return user.update(incomingUpdates)
      })
      .then(updatedUser => {
        res.json(updatedUser);
      });
  });
};