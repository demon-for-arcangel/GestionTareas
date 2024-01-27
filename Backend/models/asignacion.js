'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asignacion.init({
    id_tarea: DataTypes.INTEGER,
    id_programador: DataTypes.INTEGER,
    fecha_asignacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Asignacion',
    tableName: 'asignacion',
  });
  return Asignacion;
};