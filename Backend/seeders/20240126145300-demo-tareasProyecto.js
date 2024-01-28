'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('historialtareas', [
      { id_programador: 2, id_tarea: 1, fecha_finalizacion: new Date() },
      // Agrega más registros de historial de tareas si es necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('historialtareas', null, {});
  }
};
