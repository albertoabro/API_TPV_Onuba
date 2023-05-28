const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traceabilityproducts', {
    idAuto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTraceability: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'traceability',
        key: 'idTraceability'
      }
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'idProduct'
      }
    }
  }, {
    sequelize,
    tableName: 'traceabilityproducts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAuto" },
        ]
      },
      {
        name: "product_idx",
        using: "BTREE",
        fields: [
          { name: "idProduct" },
        ]
      },
      {
        name: "traceability_idx",
        using: "BTREE",
        fields: [
          { name: "idTraceability" },
        ]
      },
    ]
  });
};
