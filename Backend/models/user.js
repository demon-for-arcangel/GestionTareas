'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Rol, { foreignKey: 'id_rol', as: 'Rol' });
      // Define otras asociaciones si es necesario
    }
  }

  Usuario.init(
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
        unique: true, // Asegura que cada correo electrónico sea único
        validate: {
          isEmail: true, // Valida que el valor sea un correo electrónico válido
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
