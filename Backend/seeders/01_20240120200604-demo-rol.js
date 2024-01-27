const { Rol } = require('../models/rol');'
use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   try {
    const rolesExistentes = await Rol.findAll();

    if (rolesExistentes.length === 0) {
      // Crear roles solo si no existen
      await Rol.create({ nombre: 'programador' });
      await Rol.create({ nombre: 'administrador' });
      console.log('Roles iniciales creados con éxito.');
    } else {
      console.log('Roles iniciales ya existen en la base de datos.');
    }
  } catch (error) {
    console.error('Error al crear roles iniciales:', error);
  }
  },

  async down (queryInterface, Sequelize) {
       /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('rol', null, {});
     
  }
};