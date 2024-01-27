'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('asignaciones', {
      id_asignaciones: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_programador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_tarea: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tareas',
          key: 'id_tarea',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
 },
 down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('asignaciones');
 }
};