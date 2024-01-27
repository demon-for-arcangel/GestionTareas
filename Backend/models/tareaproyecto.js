'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TareaProyecto extends Model {
    static associate(models) {
      // Asociaciones (si las necesitas)
    }
  }

  TareaProyecto.init(
    {
      id_tarea_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      id_proyecto: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Proyecto',
          key: 'id_proyecto',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'TareaProyecto',
      tableName: 'tareasProyectos',
      timestamps: false,
    }
  );

  return TareaProyecto;
};
