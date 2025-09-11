'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('debts', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.DataTypes.FLOAT,
        defaultValue: 0
      },
      date_from: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      date_to: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      date_due: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      deleted_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      }
    })
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('debts')
  }
};
