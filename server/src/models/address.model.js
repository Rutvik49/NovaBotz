module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("address", {
    address: {
      type: DataTypes.STRING,
      trim: true,
    },
    apartment: {
      type: DataTypes.STRING,
      trim: true,
    },
    city: {
      type: DataTypes.STRING,
      trim: true,
    },
    state: {
      type: DataTypes.STRING,
      trim: true,
    },
    pincode: {
      type: DataTypes.STRING,
      trim: true,
      allowNull: false,
    },
  });

  return Address;
};
