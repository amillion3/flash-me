module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    historyid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cardid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cards',
        key: 'cardid'
      }
    },
    difficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    daysbwreviews: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    datelastreviewed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'history'
  });
};
