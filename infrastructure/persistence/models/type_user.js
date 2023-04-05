const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_user', {
    idTypeUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    denomination: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'idRol'
      }
    }
  }, {
    sequelize,
    tableName: 'type_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTypeUser" },
        ]
      },
      {
        name: "rol",
        using: "BTREE",
        fields: [
          { name: "rol" },
        ]
      },
    ]
  });
};
