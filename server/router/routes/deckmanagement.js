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


};