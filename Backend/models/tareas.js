'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tareas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tareas.init({
    idProgramador: DataTypes.INTEGER,
    asignadaPor: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    dificultad: DataTypes.ENUM('XS', 'S', 'M', 'L', 'XL'),
    horasPrevistas: DataTypes.INTEGER,
    horasRealizadas: DataTypes.INTEGER,
    completada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tareas',
    tableName: 'tarea',
  });
  return Tareas;
};