const { sequelize, DataTypes } = require("../configs/database");

const options = {
  timestamps: true,
  paranoid: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  deletedAt: "deleted_at",
};

module.exports = sequelize.define(
  "fixed_expenses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_regular: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    billing_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    date_from: DataTypes.DATEONLY,
    date_to: DataTypes.DATEONLY,
  },
  options
);
