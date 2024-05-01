export {};
const { DataTypes } = require('sequelize');
const sequelize = require('../connect/connect');


export const Lists = sequelize.define('lists', {
  id :{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description :{
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false
  }
  },
  {
      timestamps: false,
      autoIncrement: false,
      freezeTableName: true
  });

