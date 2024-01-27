'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
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

  return User;
};