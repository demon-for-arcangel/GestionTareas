// models/asignacion.js
'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Asignacion = sequelize.define('Asignacion', {
    // Otras columnas...
    id_usuario_asignador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_usuario_asignado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_tarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Asignacion',
    tableName: 'asignaciones',
    timestamps: false,
  });

  Asignacion.belongsTo(sequelize.models.Usuario, { foreignKey: 'id_usuario_asignador', as: 'UsuarioAsignador' });

  Asignacion.belongsTo(sequelize.models.Usuario, { foreignKey: 'id_usuario_asignado', as: 'UsuarioAsignado' });

  Asignacion.belongsTo(sequelize.models.Tarea, { foreignKey: 'id_tarea', as: 'TareaAsignada'});

  return Asignacion;
};
