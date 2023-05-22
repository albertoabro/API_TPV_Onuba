const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket', {
    idAuto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTicket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'idUser'
      }
    },
    dateBuy: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    article: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'article',
        key: 'idArticle'
      }
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typePay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'typepay',
        key: 'idTypePay'
      }
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pay: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    payBack: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ticket',
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
        name: "userName",
        using: "BTREE",
        fields: [
          { name: "userName" },
        ]
      },
      {
        name: "typePay",
        using: "BTREE",
        fields: [
          { name: "typePay" },
        ]
      },
      {
        name: "ticket_ibfk_2_idx",
        using: "BTREE",
        fields: [
          { name: "article" },
        ]
      },
    ]
  });
};
