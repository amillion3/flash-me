module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards', {
    cardid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    deckid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'cards'
  });
};
