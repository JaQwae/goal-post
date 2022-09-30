const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our League model
class League extends Model {}

// create fields/columns for League model
League.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    league_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'league',
  }
);

module.exports = League;
