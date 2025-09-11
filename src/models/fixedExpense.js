const {sequelize, DataTypes} = require('../configs/database')

module.exports = sequelize.define('fixed_expenses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_regular: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  date_from: DataTypes.DATEONLY,
  date_to: DataTypes.DATEONLY,
  date_due: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
}, {timestamps: true, paranoid: true})