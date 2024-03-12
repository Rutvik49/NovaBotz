const { asyncHandler } = require("../utils/asyncHandler.js");
const { DB } = require("../models/index.js");
const { apiError } = require("../utils/apiError.js");
const { apiResponse } = require("../utils/apiResponse.js");
const Op = require("sequelize").Op;
const Address = DB.address;

const createAddress = asyncHandler(async (req, res) => {
  const { address, apartment, city, state, pincode } = req.body;
  //   console.log(address);
  //   console.log(req.user);
  if (!pincode || !state || !city) {
    throw new apiError(400, "All the fields are mandatory..!");
  }

  const createAddress = await Address.create({
    address,
    apartment,
    city,
    state,
    pincode,
    user_id: req.user.user_id,
  });
  if (!createAddress) {
    throw new apiError(
      500,
      "Something went wrong while registering the user..!"
    );
  }

  return res
    .status(201)
    .json(new apiResponse(200, createAddress, "Address added successfully..!"));
});

module.exports = { createAddress };
