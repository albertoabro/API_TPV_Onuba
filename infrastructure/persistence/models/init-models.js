var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _family = require("./family");
var _product = require("./product");
var _providers = require("./providers");
var _roles = require("./roles");
var _terminal = require("./terminal");
var _ticket = require("./ticket");
var _traceability = require("./traceability");
var _traceabilityproducts = require("./traceabilityproducts");
var _type_user = require("./type_user");
var _typepay = require("./typepay");
var _users = require("./users");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var family = _family(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var providers = _providers(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var terminal = _terminal(sequelize, DataTypes);
  var ticket = _ticket(sequelize, DataTypes);
  var traceability = _traceability(sequelize, DataTypes);
  var traceabilityproducts = _traceabilityproducts(sequelize, DataTypes);
  var type_user = _type_user(sequelize, DataTypes);
  var typepay = _typepay(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  ticket.belongsTo(article, { as: "article_article", foreignKey: "article"});
  article.hasMany(ticket, { as: "tickets", foreignKey: "article"});
  article.belongsTo(family, { as: "family_family", foreignKey: "family"});
  family.hasMany(article, { as: "articles", foreignKey: "family"});
  traceabilityproducts.belongsTo(product, { as: "idProduct_product", foreignKey: "idProduct"});
  product.hasMany(traceabilityproducts, { as: "traceabilityproducts", foreignKey: "idProduct"});
  product.belongsTo(providers, { as: "provider_provider", foreignKey: "provider"});
  providers.hasMany(product, { as: "products", foreignKey: "provider"});
  type_user.belongsTo(roles, { as: "rol_role", foreignKey: "rol"});
  roles.hasMany(type_user, { as: "type_users", foreignKey: "rol"});
  traceabilityproducts.belongsTo(traceability, { as: "idTraceability_traceability", foreignKey: "idTraceability"});
  traceability.hasMany(traceabilityproducts, { as: "traceabilityproducts", foreignKey: "idTraceability"});
  users.belongsTo(type_user, { as: "typeUser_type_user", foreignKey: "typeUser"});
  type_user.hasMany(users, { as: "users", foreignKey: "typeUser"});
  ticket.belongsTo(typepay, { as: "typePay_typepay", foreignKey: "typePay"});
  typepay.hasMany(ticket, { as: "tickets", foreignKey: "typePay"});
  ticket.belongsTo(users, { as: "userName_user", foreignKey: "userName"});
  users.hasMany(ticket, { as: "tickets", foreignKey: "userName"});

  return {
    article,
    family,
    product,
    providers,
    roles,
    terminal,
    ticket,
    traceability,
    traceabilityproducts,
    type_user,
    typepay,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
