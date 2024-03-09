const Router = require("express");
const {
  sendOTP,
  registerUser,
  loginUser,
} = require("../controllers/user.controller.js");

const router = Router();

router.route("/register").post(registerUser);
router.route("/sendOtp").get(sendOTP);
router.route("/login").post(loginUser);

module.exports = router;
