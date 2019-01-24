const Deck = require('../models').Deck;

module.exports = {
  create(req, res) {
    return Deck
      .create({
        name: req.body.name,
        category: req.body.category,
        publicdeck: req.body.publicdeck,
        deckcreatorid: req.body.deckcreatorid,
        datecreated: req.body.datecreated,
        datelastmodified: req.body.datelastmodified,
      })
      .then(deck => res.status(201).send(deck))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Deck
      .all()
      .then(deck => res.status(201).send(deck))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Deck
      .findById(req.params.deckId, {
        include: [{
          model: Deck,
          as: 'deckItems',
        }],
      })
      .then(deck => {
        if (!deck) {
          return res.status(404).send({
            message: 'Deck Not Found',
          });
        }
        return res.status(200).send(deck);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Deck
      .findById(req.params.DeckId, {
        include: [{
          model: Deck,
          as: 'deckItems',
        }],
      })
      .then(deck => {
        if (!deck) {
          return res.status(404).send({
            message: 'Deck Not Found',
          });
        }
        return deck
          .update({
            name: req.body.name || deck.name,
            category: req.body.category || deck.category,
            publicdeck: req.body.publicdeck || deck.publicdeck,
            deckcreatorid: req.body.deckcreatorid || deck.deckcreatorid,
            datecreated: req.body.datecreated || deck.datecreated,
            datelastmodified: req.body.datelastmodified || deck.datelastmodified,
          })
          .then(() => res.status(200).send(deck)) // Send back the updated deck.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Deck
      .findById(req.params.DeckId)
      .then(deck => {
        if (!deck) {
          return res.status(400).send({
            message: 'Deck Not Found',
          });
        }
        return deck
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};