'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      { nombre_usuario: 'Admin', email: 'admin@gmail.com', contrasena: 'admin123', id_rol: 1 },
      { nombre_usuario: 'Programador', email: 'prog@gmail.com', contrasena: 'admin123', id_rol: 2 },
    ], { validate: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
