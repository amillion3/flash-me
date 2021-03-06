/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userdeckpairing', {
    userdeckpairingid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    deckid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'userdeckpairing'
  });
};
