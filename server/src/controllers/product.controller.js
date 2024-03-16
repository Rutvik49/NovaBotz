const { asyncHandler } = require("../utils/asyncHandler.js");
const { DB } = require("../models/index.js");
const { apiError } = require("../utils/apiError.js");
const { apiResponse } = require("../utils/apiResponse.js");
const { uploadOnCloudnary } = require("../utils/cloudnary.js");
const Product = DB.products;

const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body || req.form;
  if (!title || !price) {
    throw new apiError(400, "title and price are mandatory for the product..!");
  }

  const imagesLocalPath = req.files;
  let images = [];
  for (let i = 0; i < imagesLocalPath.length; i++) {
    const cloudUpload = await uploadOnCloudnary(imagesLocalPath[i].path);
    images.push(cloudUpload.url);
    // console.log(cloudUpload);
  }
  console.log(images);

  const createProduct = await Product.create({
    title,
    description,
    price,
    images,
  });
  if (!createProduct) {
    throw new apiError(500, "Something went wrong while adding the product..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, "Product created successfully..!"));
});

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  if (!products) {
    throw new apiError(500, "We are facing error in fetching products..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, products, "Products fetched successfully..!"));
});

const removeProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const products = await Product.destroy({ where: { id: productId } });
  console.log(products);
  if (!products) {
    throw new apiError(500, "We are facing error in deleting product..!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, "Product deleted successfully..!"));
});

module.exports = { createProduct, getProduct, removeProduct };
