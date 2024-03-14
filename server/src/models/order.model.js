module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    product_name: {
      type: DataTypes.STRING,
    },
  });
  return Order;
};
