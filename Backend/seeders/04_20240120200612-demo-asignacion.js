'use strict';
const{assignedRolFactory}=require('../factories/asignacionFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rols = await assignedRolFactory(1);
    await queryInterface.bulkInsert('asignacion', rols, {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('asignacion', null, {});
     
  }
};