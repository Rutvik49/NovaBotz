const jwt = require("jsonwebtoken");
const { apiError } = require("../utils/apiError");
const { asyncHandler } = require("../utils/asyncHandler");
const { DB } = require("../models/index.js");
let User = DB.users;

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.authToken ||
      req.header("Authorization")?.replace("Bearer", "");
    if (!token) {
      throw new apiError(401, "Unauthorized request..!");
    }
    const decodedToken = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findOne({ where: { id: decodedToken?.id } });
    if (!user) {
      throw new apiError(401, "Invalid Access Token..!");
    }
    req.body = user;
    next();
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid Access Token..!");
  }
});
module.exports = { verifyJWT };
