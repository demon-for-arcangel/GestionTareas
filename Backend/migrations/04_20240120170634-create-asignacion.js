'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('asignacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'rol'
          },
          key: 'id'
        },
        onDelete:'CASCADE'
        
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'user'
          },
          
          key: 'id'
        },
        onDelete:'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('asignacion');
  }
};