'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tareas', [
      { descripcion: 'Tarea 1', dificultad: 'M', horas_previstas: 10, id_programador: 2, asignada_por: 1 },
      { descripcion: 'Tarea 2', dificultad: 'S', horas_previstas: 8, id_programador: 2, asignada_por: 1 },
      // Agrega más tareas si es necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tareas', null, {});
  }
};
