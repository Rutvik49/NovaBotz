module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    order_id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true
    },
    estDelivery: {
      type: DataTypes.DATE,
    },
    grandTotal: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    orderStatus: {
      type: DataTypes.ENUM("delivered", "pending", "cancelled"),
      allowNull: false,
      trim: true,
    },
    paymentMethod: {
      type: DataTypes.ENUM("pod", "online", ""),
      allowNull: false,
    },
    isPaymentValid: {
      type: DataTypes.BOOLEAN,
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "completed", ""),
    },
    transactionId: {
      type: DataTypes.INTEGER,
    },
  });
  return Order;
};
