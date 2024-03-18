const dbConfig = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const DB = {};
DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

DB.users = require("./user.model.js")(sequelize, DataTypes);
DB.orders = require("./order.model.js")(sequelize, DataTypes);
DB.otptabs = require("./otp.model.js")(sequelize, DataTypes);
DB.address = require("./address.model.js")(sequelize, DataTypes);
DB.products = require("./product.model.js")(sequelize, DataTypes);

DB.users.hasMany(DB.orders, { foreignKey: "user_id" });
DB.orders.belongsTo(DB.users, { foreignKey: "user_id" });

DB.users.hasOne(DB.address, { foreignKey: "user_id" });
DB.address.belongsTo(DB.users, { foreignKey: "user_id" });

DB.products.hasMany(DB.orders, { foreignKey: "product_id" });
DB.orders.belongsTo(DB.products, { foreignKey: "product_id" });

const connectDB = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Database Connected..!");
    })
    .catch((error) => {
      console.error("Database Connection failed", error);
    });

  await DB.sequelize
    .sync({ force: false })
    .then(() => {
      console.log("DataBase tables synced");
    })
    .catch((error) => {
      console.error("Error : ", error);
    });
};

module.exports = { DB, connectDB };
