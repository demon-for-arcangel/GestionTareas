'use strict';
const faker = require('faker');

const tareaFactory = async (ctos = 1) => {
  const tasks = [];

  for (let i = 0; i < ctos; i++) {
    tasks.push({
      descripcion: faker.lorem.sentence(),
      dificultad: faker.random.arrayElement(['XS', 'S', 'M', 'L', 'XL']),
      horas_previstas: faker.random.number({ min: 1, max: 20 }),
      id_programador: faker.random.number({ min: 1, max: 10 }), // Ajusta según la cantidad de usuarios
      asignada_por: faker.random.number({ min: 1, max: 10 }), // Ajusta según la cantidad de usuarios
    });
  }

  return tasks;
};

module.exports = tareaFactory;
