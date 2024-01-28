'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('asignaciones', [
      { id_administrador: 1, id_programador: 2, id_tarea: 1, createdAt: new Date(), updatedAt: new Date() },
      // Agrega más asignaciones si es necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('asignaciones', null, {});
  }
};
