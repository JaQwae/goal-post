const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// const { findAll } = require('./Product');

// create our Recipient model
class Recipient extends Model {}

Recipient.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipient_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipient_category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipient',
  }
);

module.exports = Recipient;
