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
      id_tarea: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.ENUM('XS', 'S', 'M', 'L', 'XL'),
        allowNull: false,
      },
      horas_previstas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      horas_realizadas: {
        type: DataTypes.INTEGER,
      },
      porcentaje_realizacion: {
        type: DataTypes.INTEGER,
      },
      completada: {
        type: DataTypes.BOOLEAN,
      },
      id_programador: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      asignada_por: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      sequelize,
      modelName: 'Tarea',
      tableName: 'tareas',
      timestamps: false,
    }
  );

  return Tareas;
};