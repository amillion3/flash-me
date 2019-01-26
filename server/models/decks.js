module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('decks', {
    deckid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
      allowNull: true,
      defaultValue: '0'
    },
    deckcreatorid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: 0,
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
    timestamps: false
  },  {
    tableName: 'decks'
  });

  return Deck;
};
