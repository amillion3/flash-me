const moment = require('moment');

module.exports = (app, db) => {
  // GET all decks
  app.get('/decks', (req, res) => {
    db.decks.findAll()
      .then(decks => {
        res.json(decks);
      });
  });

  // GET one deck by id
  app.get('/decks/:id', (req, res) => {
    const deckid = req.params.id;

    db.decks.find({
      where: { deckid }
    })
      .then(deck => {
        res.json(deck);
      });
  });

  // GET one deck by id, for editing
  app.get('/decks/edit/:id', (req, res) => {
    const deckid = req.params.id;
    console.log('decks.js');

    db.decks.find({
      where: { deckid }
    })
      .then(deck => {
        res.json(deck);
      });
  });

  // POST single deck
  app.post('/decks', (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const publicdeck = req.body.publicdeck;
    const deckcreatorid = req.body.deckcreatorid;
    const datecreated = moment();
    const datelastmodified = datecreated;

    db.decks.create({
      name,
      category,
      publicdeck,
      deckcreatorid,
      datecreated,
      datelastmodified
    })
      .then(newOwner => {
        res.json(newOwner);
      })
  });

  // PATCH single deck
  app.patch('/decks/edit/:id', (req, res) => {
    const deckid = req.params.id;
    const incomingUpdates = req.body.updates;
    console.log(deckid)
    console.log(incomingUpdates)

    db.decks.find({
      where: { deckid }
    })
      .then(deck => {
        return deck.update(incomingUpdates)
      })
      .then(updatedDeck => {
        res.json(updatedDeck);
      });
  });

  // DELETE single deck
  app.delete('/decks/:id', (req, res) => {
    const deckid = req.params.id;

    db.decks.destroy({
      where: { deckid }
    })
      .then(deletedDeck => {
        res.json(deletedDeck);
      });
  });
};