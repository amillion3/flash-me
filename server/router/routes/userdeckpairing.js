module.exports = (app, db) => {
  // GET all decks
  // app.get('/decks', (req, res) => {
  //   db.decks.findAll()
  //     .then(decks => {
  //       res.json(decks);
  //     });
  // });

  // GET one deck by id
  // app.get('/decks/:id', (req, res) => {
  //   const deckid = req.params.id;

  //   db.decks.find({
  //     where: { deckid }
  //   })
  //     .then(deck => {
  //       res.json(deck);
  //     });
  // });

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
  // app.patch('/decks/:id', (req, res) => {
  //   const deckid = req.params.id;
  //   const updates = req.body.updates;

  //   db.decks.find({
  //     where: { deckid }
  //   })
  //     .then(deck => {
  //       return deck.updateAttributes(updates)
  //     })
  //     .then(updatedDeck => {
  //       res.json(updatedDeck);
  //     });
  // });

  // DELETE single deck
  // app.delete('/decks/:id', (req, res) => {
  //   const deckid = req.params.id;

  //   db.decks.destroy({
  //     where: { deckid }
  //   })
  //     .then(deletedDeck => {
  //       res.json(deletedDeck);
  //     });
  // });
};