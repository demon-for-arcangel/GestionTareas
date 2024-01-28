'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('proyectos', [
      { nombre_proyecto: 'Proyecto 1' },
      // Agrega más proyectos si es necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('proyectos', null, {});
  }
};
