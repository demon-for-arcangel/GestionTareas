'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HistorialTareas extends Model {
    static associate(models) {
      // Asociaciones (si las necesitas)
    }
  }

  HistorialTareas.init(
    {
      id_historial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      id_tarea: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tarea',
          key: 'id_tarea',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fecha_finalizacion: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: 'HistorialTareas',
      tableName: 'historialTareas',
      timestamps: false,
    }
  );

  return HistorialTareas;
};
