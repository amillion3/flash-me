module.exports = (app, db) => {
  // GET all userdeckpairing
  app.get('/userdeckpairing', (req, res) => {
    db.userdeckpairing.findAll()
      .then(userdeckpairings => {
        res.json(userdeckpairings);
      });
  });

  // GET single userdeckpairing
  app.get('/userdeckpairing/:id', (req, res) => {
    const userdeckpairingid = req.params.id;

    db.userdeckpairing.find({
      where: { userdeckpairingid }
    })
      .then(userdeckpairing => {
        res.json(userdeckpairing);
      });
  });

  // POST single deck
  app.post('/userdeckpairing', (req, res) => {
    const userid = req.body.userid;
    const deckid = req.body.deckid;

    db.userdeckpairing.create({
      userid,
      deckid
    })
      .then(newPairing => {
        res.json(newPairing);
      })
  });

  // PATCH single deck
  app.patch('/userdeckpairing/:id', (req, res) => {
    const userdeckpairingid = req.params.id;
    const updates = req.body.updates;

    db.userdeckpairing.find({
      where: { userdeckpairingid }
    })
      .then(pairing => {
        return pairing.updateAttributes(updates)
      })
      .then(updatedPairing => {
        res.json(updatedPairing);
      });
  });

  // DELETE single deck
  app.delete('/userdeckpairing/:id', (req, res) => {
    const userdeckpairingid = req.params.id;

    db.userdeckpairing.destroy({
      where: { userdeckpairingid }
    })
      .then(deletedPairing => {
        res.json(deletedPairing);
      });
  });
};