module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    namefirst: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    namelast: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    datejoined: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datelastvisit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deckcurrentlyloaded: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deckscurrentlyused: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  });
};
