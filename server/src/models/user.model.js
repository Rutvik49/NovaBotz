module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      trim: true,
    },
    lastName: {
      type: DataTypes.STRING,
      trim: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      trim: true,
    },
    phoneNo: {
      type: DataTypes.STRING,
      unique: true,
      trim: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
  });

  return User;
};
