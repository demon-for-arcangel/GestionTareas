'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Proyectos', [
      { nombre_proyecto: 'Proyecto A' },
      { nombre_proyecto: 'Proyecto B' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Proyectos', null, {});
  }
};
