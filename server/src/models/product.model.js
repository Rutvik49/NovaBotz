module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      product_id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
      },
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
