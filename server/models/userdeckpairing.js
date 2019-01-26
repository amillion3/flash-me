module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userdeckpairing', {
    userdeckpairingid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deckid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'userdeckpairing',
  });
};
