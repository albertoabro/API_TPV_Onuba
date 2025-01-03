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
    numberBatch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "numberBatch_UNIQUE"
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
        ]
      },
      {
        name: "numberBatch_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numberBatch" },
        ]
      },
    ]
  });
};
