const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    idUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "userName"
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    typeUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_user',
        key: 'idTypeUser'
      }
    },
    passwordTPV: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
      {
        name: "userName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userName" },
        ]
      },
      {
        name: "typeUser",
        using: "BTREE",
        fields: [
          { name: "typeUser" },
        ]
      },
    ]
  });
};
