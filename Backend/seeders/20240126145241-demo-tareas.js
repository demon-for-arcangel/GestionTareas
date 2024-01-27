'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tareas', [
      { descripcion: 'Tarea 1', dificultad: 'M', horas_previstas: 10, id_programador: 2, asignada_por: 1 }, // Asigna los ID correctos según las migraciones de Usuarios
      { descripcion: 'Tarea 2', dificultad: 'S', horas_previstas: 5, id_programador: 2, asignada_por: 1 },
      { descripcion: 'Tarea 3', dificultad: 'L', horas_previstas: 15, id_programador: 2, asignada_por: 1 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tareas', null, {});
  }
};
