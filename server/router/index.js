const routes = [
  require('./routes/cards'),
  require('./routes/decks'),
  require('./routes/userdeckpairing'),
  require('./routes/users'),
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};