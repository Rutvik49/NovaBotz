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

DB.users.hasMany(DB.orders, { foreignKey: "created_by" });
DB.orders.belongsTo(DB.users, { foreignKey: "created_by" });

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
