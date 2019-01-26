/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersettings', {
    usersettingsid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    colortheme: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'usersettings'
  });
};
