const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminal', {
    idterminal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "name_UNIQUE"
    },
    ipv4: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "ipv4_UNIQUE"
    },
    ipv6: {
      type: DataTypes.STRING(39),
      allowNull: true,
      unique: "ipv6_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'terminal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idterminal" },
        ]
      },
      {
        name: "name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ipv4_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ipv4" },
        ]
      },
      {
        name: "ipv6_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ipv6" },
        ]
      },
    ]
  });
};
