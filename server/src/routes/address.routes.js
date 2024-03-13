const Router = require("express");
const {
  createAddress,
  getAddress,
  updateAddress,
} = require("../controllers/address.controller.js");
const { verifyJWT } = require("../middlewares/authenticateUser.js");
const router = Router();

router.route("/add-address").post(verifyJWT, createAddress);
router.route("/get-address").get(verifyJWT, getAddress);
router.route("/update-address").patch(verifyJWT, updateAddress);

module.exports = router;
