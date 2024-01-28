// models/usuario.js
'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_usuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING, // Cambiado a STRING para almacenar el correo electrónico
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      id_rol: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Rol',
          key: 'id_rol',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      timestamps: false,
    }
  );

  return Usuario;
};
