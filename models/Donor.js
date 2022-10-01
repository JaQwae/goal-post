const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Donor extends Model {}

// create fields/columns for Donor model
Donor.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    donor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donation: {
      type: DataTypes.INTEGER,
      validate: {
        isNumerical: true
      }
    },
    league_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'league',
          key: 'id'
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'donor',
  }
);

module.exports = Donor;
