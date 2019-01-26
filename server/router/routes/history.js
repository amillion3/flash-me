const moment = require('moment');

module.exports = (app, db) => {
  // GET all history
  app.get('/history', (req, res) => {
    db.history.findAll()
      .then(history => {
        res.json(history);
      });
  });

  // GET one history by id
  app.get('/history/:id', (req, res) => {
    const historyid = req.params.id;

    db.history.find({
      where: { historyid }
    })
      .then(hist => {
        res.json(hist);
      });
  });

  // POST single history
  app.post('/history', (req, res) => {
    const userid = req.body.userid ;
    const cardid = req.body.cardid ;
    const difficulty = req.body.difficulty ;
    const daysbwreviews = null ;
    const datelastreviewed = null ;

    db.history.create({
      userid,
      cardid,
      difficulty,
      daysbwreviews,
      datelastreviewed,
    })
      .then(newHistory => {
        res.json(newHistory);
      })
  });

  // PATCH single history
  app.patch('/history/:id', (req, res) => {
    const historyid = req.params.id;
    const incomingUpdates = req.body.updates;

    db.history.find({
      where: { historyid }
    })
      .then(hist => {
        return hist.update(incomingUpdates)
      })
      .then(updatedHistory => {
        res.json(updatedHistory);
      });
  });

  // DELETE single history
  app.delete('/history/:id', (req, res) => {
    const historyid = req.params.id;

    db.history.destroy({
      where: { historyid }
    })
      .then(deletedHistory => {
        res.json(deletedHistory);
      });
  });
};