const Router = require("express");
const { sendOTP, registerUser } = require("../controllers/user.controller.js");

const router = Router();

router.route("/register").post(registerUser);
router.route("/sendOtp").get(sendOTP);

module.exports = router;
