const moment = require('moment');

module.exports = (app, db) => {
  // GET all cards
  app.get('/users', (req, res) => {
    db.users.findAll()
      .then(users => {
        res.json(users);
      });
  });

  // GET one user by id
  app.get('/users/:id', (req, res) => {
    const userid = req.params.id;

    db.users.find({
      where: { userid }
    })
      .then(user => {
        res.json(user);
      });
  });

  // POST single user
  app.post('/users', (req, res) => {
    const namefirst = req.body.namefirst;
    const namelast = req.body.namelast;
    const datejoined = moment();
    const datelastvisit = moment();
    const deckcurrentlyloaded = req.body.deckcurrentlyloaded;
    const deckscurrentlyused = req.body.deckscurrentlyused;

    db.users.create({
      namefirst,
      namelast,
      datejoined,
      datelastvisit,
      deckcurrentlyloaded,
      deckscurrentlyused
    })
      .then(newUser => {
        res.json(newUser);
      })
  });

  // PATCH single user
  app.patch('/users/:id', (req, res) => {
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

  // DELETE single user
  app.delete('/users/:id', (req, res) => {
    const userid = req.params.id;

    db.users.destroy({
      where: { userid }
    })
      .then(deletedUser => {
        res.json(deletedUser);
      });
  });
};