'use strict';


const {usuarioFactory} = require('../factories/usuarioFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarios = await usuarioFactory(2);
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};