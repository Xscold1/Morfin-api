const {sequelize, DataTypes} = require('../configs/database')

module.exports = sequelize.define('debts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  date_from: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  date_to: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  date_due: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
}, { timestamps: true, paranoid: true})