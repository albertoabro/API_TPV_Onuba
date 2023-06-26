let DataTypes = require("sequelize").DataTypes;
let _article = require("./article");
let _family = require("./family");
let _product = require("./product");
let _providers = require("./providers");
let _roles = require("./roles");
let _terminal = require("./terminal");
let _ticket = require("./ticket");
let _traceability = require("./traceability");
let _traceabilityproducts = require("./traceabilityproducts");
let _type_user = require("./type_user");
let _typepay = require("./typepay");
let _users = require("./users");

function initModels(sequelize) {
  let article = _article(sequelize, DataTypes);
  let family = _family(sequelize, DataTypes);
  let product = _product(sequelize, DataTypes);
  let providers = _providers(sequelize, DataTypes);
  let roles = _roles(sequelize, DataTypes);
  let terminal = _terminal(sequelize, DataTypes);
  let ticket = _ticket(sequelize, DataTypes);
  let traceability = _traceability(sequelize, DataTypes);
  let traceabilityproducts = _traceabilityproducts(sequelize, DataTypes);
  let type_user = _type_user(sequelize, DataTypes);
  let typepay = _typepay(sequelize, DataTypes);
  let users = _users(sequelize, DataTypes);

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
