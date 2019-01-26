module.exports = (app, db) => {
  // GET all cards
  app.get('/cards', (req, res) => {
    db.cards.findAll()
      .then(cards => {
        res.json(cards);
      });
  });

  // GET one card by id
  app.get('/cards/:id', (req, res) => {
    const cardid = req.params.id;

    db.cards.find({
      where: { cardid }
    })
      .then(card => {
        res.json(card);
      });
  });

  // POST single card
  app.post('/cards', (req, res) => {
    const deckid = req.body.deckid;
    const question = req.body.question;
    const answer = req.body.answer;

    db.cards.create({
      deckid,
      question,
      answer
    })
      .then(newCard => {
        res.json(newCard);
      })
  });

  // PATCH single card
  app.patch('/cards/:id', (req, res) => {
    const cardid = req.params.id;
    const incomingUpdates = req.body.updates;

    db.cards.find({
      where: { cardid }
    })
      .then(card => {
        return card.update(incomingUpdates)
      })
      .then(updatedCard => {
        res.json(updatedCard);
      });
  });

  // DELETE single deck
  app.delete('/cards/:id', (req, res) => {
    const cardid = req.params.id;

    db.cards.destroy({
      where: { cardid }
    })
      .then(deletedCard => {
        res.json(deletedCard);
      });
  });
};