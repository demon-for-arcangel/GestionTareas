'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historialTareas', {
      id_historial: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_programador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      fecha_finalizacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('historialTareas');
  },
};
