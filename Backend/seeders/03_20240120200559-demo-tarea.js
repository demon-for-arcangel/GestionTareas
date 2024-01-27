const tareaFactory = require('../factories/tareaFactory');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tareas = [];

    for (let i = 0; i < 20; i++) {
      tareas.push(tareaFactory(Sequelize, Sequelize.DataTypes));
    }

    await queryInterface.bulkInsert('tareas', tareas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tareas', null, {});
  }
};
