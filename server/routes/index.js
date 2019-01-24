// import { Deck as decksController } from '../controllers';
const decksController = require('../controllers').Deck;

module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'This is the Decks API',
  }));

  app.post('/api/decks', decksController.create);
  app.get('/api/decks', decksController.list);
  app.get('/api/decks/:DeckId', decksController.retrieve);
  app.put('/api/decks/:DeckId', decksController.update);
  app.delete('api/decks/:DeckId', decksController.destroy);
};