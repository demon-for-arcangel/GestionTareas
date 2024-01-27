'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TareasProyecto', [
      { id_tarea: 1, id_proyecto: 1 }, // Asigna los ID correctos según las migraciones de Tareas y Proyectos
      { id_tarea: 2, id_proyecto: 1 },
      { id_tarea: 3, id_proyecto: 2 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TareasProyecto', null, {});
  }
};
