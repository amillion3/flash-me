/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Deck = sequelize.define('decks', {
    deckid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    publicdeck: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    deckcreatorid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    datecreated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datelastmodified: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'decks'
  });

  return Deck;
};
