module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
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
