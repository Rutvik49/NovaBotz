const { asyncHandler } = require("../utils/asyncHandler.js");
const { DB } = require("../models/index.js");
const otpGenerator = require("otp-generator");
const { apiError } = require("../utils/apiError.js");
const { apiResponse } = require("../utils/apiResponse.js");
let User = DB.users;
let OtpTab = DB.otptabs;

const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const checkUserPresent = await User.findOne({
    where: {
      email,
    },
  });
  if (checkUserPresent) {
    throw new apiError(401, "User is Already Registered");
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
    throw new apiError(500, "Something went wrong while sending the otp..!");
  }
  return res
    .status(201)
    .json(new apiResponse(200, createOtp, "otp sent successfully..!"));
});

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNo, password, otp } = req.body;
  if (!email || !phoneNo || !password || !otp) {
    throw new apiError(400, "All the fields are mandatory..!");
  }

  const existedUser = await User.findOne({
    where: {
      email,
      phoneNo,
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
  console.log(verifyOtp);
  if (!verifyOtp) {
    throw new apiError(401, "Invalid Otp..!");
  }

  const createdUser = await User.create({
    firstName: firstName || "",
    lastName: lastName || "",
    email,
    phoneNo,
    password,
  });
  if (!createdUser) {
    throw new apiError(
      500,
      "Something went wrong while registering the user..!"
    );
  }
  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "User registered successfully..!"));
});

module.exports = { sendOTP, registerUser };
