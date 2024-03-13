const { asyncHandler } = require("../utils/asyncHandler.js");
const { DB } = require("../models/index.js");
const otpGenerator = require("otp-generator");
const { apiError } = require("../utils/apiError.js");
const { apiResponse } = require("../utils/apiResponse.js");
const Op = require("sequelize").Op;
const jwt = require("jsonwebtoken");
const {
  encryptPassword,
  comparePassword,
} = require("../utils/passwordManager.js");
let User = DB.users;
let OtpTab = DB.otptabs;

const generateAuthToken = async (user) => {
  try {
    const token = await jwt.sign(
      { id: user.user_id },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return token;
  } catch (error) {
    console.log(error);
    throw new apiError(500, "Something went wrong while generatig token..!");
  }
};

// --------send otp function--------
const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const checkSentOtp = await OtpTab.findOne({
    where: {
      email,
    },
  });
  if (checkSentOtp) {
    throw new apiError(401, "Otp already sent..!");
  }

  // ****************** generating otp and querying it into otp table **********************

  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  const result = await OtpTab.findOne({
    where: {
      otp,
    },
  });
  while (result) {
    otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
    });
  }

  // ******************* saving otp into otptable ********************************

  const otpPayload = { email, otp };
  const createOtp = await OtpTab.create(otpPayload);
  if (!createOtp) {
    throw new apiError(500, "Something went wrong while creating the otp..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, createOtp, "Otp sent successfully..!"));
});

// --------register user function--------
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNo, password, otp } = req.body;
  if (!email || !phoneNo || !password || !otp) {
    throw new apiError(400, "All the fields are mandatory..!");
  }
  const existedUser = await User.findOne({
    where: {
      [Op.or]: {
        email: email || "",
        phoneNo: phoneNo || "",
      },
    },
  });
  if (existedUser) {
    throw new apiError(409, "User with email or phoneNo already exist..!");
  }

  const verifyOtp = await OtpTab.findOne({
    where: {
      email,
      otp,
    },
  });
  if (!verifyOtp) {
    throw new apiError(401, "Invalid Otp..!");
  }

  const createdUser = await User.create({
    firstName: firstName || "",
    lastName: lastName || "",
    email,
    phoneNo,
    password: await encryptPassword(password),
  });
  if (!createdUser) {
    throw new apiError(
      500,
      "Something went wrong while registering the user..!"
    );
  }

  delete createdUser.dataValues.password;
  await OtpTab.destroy({ where: { email } });

  const authToken = await generateAuthToken(createdUser);
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .cookie("authToken", authToken, options)
    .json(new apiResponse(200, createdUser, "User registered successfully..!"));
});

// --------login user function--------
const loginUser = asyncHandler(async (req, res) => {
  const { email, phoneNo, password } = req.body;
  if (!(email || phoneNo) || !password) {
    throw new apiError(400, "All the fields are mandatory..!");
  }

  const user = await User.findOne({
    where: {
      [Op.or]: {
        email: email || "",
        phoneNo: phoneNo || "",
      },
    },
  });
  if (!user) {
    throw new apiError(401, "User does not exist..!");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new apiError(409, "Invalid credentials..!");
  }

  delete user.dataValues.password;
  const authToken = await generateAuthToken(user);
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("authToken", authToken, options)
    .json(new apiResponse(200, user, "User logged in successfully..!"));
});

// --------update user function--------
const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNo } = req.body;

  const updateUser = await User.update(
    {
      firstName,
      lastName,
      phoneNo,
    },
    {
      where: {
        user_id: req.user.user_id,
      },
    }
  );
  if (!updateUser) {
    throw new apiError(500, "Something went wrong while updating the user..!");
  }

  const getUser = await User.findOne({
    where: { user_id: req.user.user_id },
  });
  if (!getUser) {
    throw new apiError(500, "Something went wrong while updating the user..!");
  }
  delete getUser.dataValues.password;

  return res
    .status(200)
    .json(new apiResponse(200, getUser, "User updated successfully..!"));
});

module.exports = { sendOTP, registerUser, loginUser, updateUser };
