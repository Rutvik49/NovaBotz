const Router = require("express");
const {
  sendOTP,
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/user.controller.js");
const { verifyJWT } = require("../middlewares/authenticateUser.js");

const router = Router();

router.route("/register").post(registerUser);
router.route("/sendOtp").get(sendOTP);
router.route("/login").post(loginUser);
router.route("/updateUser").patch(verifyJWT, updateUser);

module.exports = router;
