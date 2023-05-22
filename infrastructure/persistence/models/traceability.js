const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traceability', {
    idTraceability: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    article: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    products: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'idProduct'
      }
    },
    numberBatch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'traceability',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTraceability" },
          { name: "products" },
        ]
      },
      {
        name: "traceability_ibfk_1_idx",
        using: "BTREE",
        fields: [
          { name: "products" },
        ]
      },
    ]
  });
};
