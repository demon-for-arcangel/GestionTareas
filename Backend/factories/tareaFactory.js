const faker = require('@faker-js/faker');

const generarTareas = (count = 1) => {
 let tareas = [];
 for(let i = 0; i < count; i++) {
  const opciones=['XS','S','M','L','XL']
  let tarea = {
    idProgramador: null,
    asignadaPor: null,
    descripcion: 'tarea',
    dificultad: opciones[Math.floor(Math.random() * opciones.length)],
    horas_previstas: Math.floor(Math.random() * (20 - 10+ 1)) + 10,
    horas_realizadas: 0,
    completada: false
  };
  tareas.push(tarea);
 }
 return tareas;
}

module.exports = {
 generarTareas
}