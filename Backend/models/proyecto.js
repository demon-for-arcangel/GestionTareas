'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    static associate(models) {
      // Asociaciones (si las necesitas)
    }
  }

  Proyecto.init(
    {
      id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_proyecto: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Proyecto',
      tableName: 'proyectos',
      timestamps: false,
    }
  );

  return Proyecto;
};
