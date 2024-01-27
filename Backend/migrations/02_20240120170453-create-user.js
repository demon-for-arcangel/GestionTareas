'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_usuario: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING, // Cambiado a STRING para almacenar el correo electrónico
        allowNull: false,
        unique: true, // Asegura que cada correo electrónico sea único
      },
      contrasena: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id_rol',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  },
};
