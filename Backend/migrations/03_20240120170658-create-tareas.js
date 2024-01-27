'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tareas', {
      id_tarea: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dificultad: {
        type: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL'),
        allowNull: false,
      },
      horas_previstas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horas_realizadas: {
        type: Sequelize.INTEGER,
      },
      porcentaje_realizacion: {
        type: Sequelize.INTEGER,
      },
      completada: {
        type: Sequelize.BOOLEAN,
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
      asignada_por: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tareas');
  },
};
