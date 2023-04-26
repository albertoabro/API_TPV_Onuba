const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    idArticle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nameSales: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    priceSales: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    units: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    family: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'family',
        key: 'idFamily'
      }
    },
    numBatch: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'article',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idArticle" },
        ]
      },
      {
        name: "family",
        using: "BTREE",
        fields: [
          { name: "family" },
        ]
      },
    ]
  });
};
