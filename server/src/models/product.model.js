module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      title: {
        type: DataTypes.STRING,
        trim: true,
      },
      description: {
        type: DataTypes.STRING,
        trim: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      images: {
        type: DataTypes.JSON(DataTypes.STRING),
      },
    },
    { timestamps: false }
  );

  return Product;
};
