'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tareasProyecto', {
      id_tarea_proyecto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      id_proyecto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Proyectos',
          key: 'id_proyecto',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tareasProyecto');
  },
};
