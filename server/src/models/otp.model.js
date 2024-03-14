const { sendOtpEmail } = require("../utils/sendEmail");
module.exports = (sequelize, DataTypes) => {
  const OtpTab = sequelize.define(
    "otptab",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        trim: true,
      },
      otp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  OtpTab.beforeCreate(async (otptab) => {
    try {
      const mailResponse = await sendOtpEmail(
        otptab.email,
        "Verification Email",
        otptab.otp
      );
      console.log("Email sent successfully..!");
    } catch (error) {
      console.log("Error occurred while sending email: ", error);
      throw error;
    }
  });

  return OtpTab;
};
