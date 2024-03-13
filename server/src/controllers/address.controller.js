const { asyncHandler } = require("../utils/asyncHandler.js");
const { DB } = require("../models/index.js");
const { apiError } = require("../utils/apiError.js");
const { apiResponse } = require("../utils/apiResponse.js");
const Address = DB.address;

const createAddress = asyncHandler(async (req, res) => {
  const { address, apartment, city, state, pincode } = req.body;
  if (!pincode || !state || !city) {
    throw new apiError(400, "pincode, city and state are mandatory..!");
  }
  const existedAddress = await Address.findOne({
    where: { user_id: req.user.user_id },
  });
  if (existedAddress) {
    throw new apiError(401, "Address already created..!");
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
    throw new apiError(500, "Something went wrong while adding the address..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, createAddress, "Address added successfully..!"));
});

const getAddress = asyncHandler(async (req, res) => {
  const address = await Address.findOne({
    where: { user_id: req.user.user_id },
  });
  if (!address) {
    throw new apiError(401, "Address not added yet..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, address, "Address fetched successfully..!"));
});

const updateAddress = asyncHandler(async (req, res) => {
  const { address, apartment, city, state, pincode } = req.body;

  const existedAddress = await Address.findOne({
    where: { user_id: req.user.user_id },
  });
  if (!existedAddress) {
    throw new apiError(401, "Address not found to update..!");
  }

  const updateAddress = await Address.update(
    {
      address,
      apartment,
      city,
      state,
      pincode,
    },
    {
      where: {
        user_id: req.user.user_id,
      },
    }
  );
  if (!updateAddress) {
    throw new apiError(
      500,
      "Something went wrong while updating the address..!"
    );
  }

  const getAddress = await Address.findOne({
    where: { user_id: req.user.user_id },
  });
  if (!getAddress) {
    throw new apiError(
      500,
      "Something went wrong while updating the address..!"
    );
  }

  return res
    .status(201)
    .json(new apiResponse(200, getAddress, "Address updated successfully..!"));
});

module.exports = { createAddress, getAddress, updateAddress };
