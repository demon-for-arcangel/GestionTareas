// seeders/06_historialtareas_seeder.js

'use strict';

const { HistorialTareas } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await HistorialTareas.bulkCreate([
      { id_programador: 1, id_tarea: 1 },
      { id_programador: 2, id_tarea: 2 },
      // Agrega más entradas de historial si es necesario
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await HistorialTareas.destroy({ where: {} });
  },
};
