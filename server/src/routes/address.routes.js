const Router = require("express");
const { createAddress } = require("../controllers/address.controller.js");
const { verifyJWT } = require("../middlewares/authenticateUser.js");
const router = Router();

router.route("/add-address").post(verifyJWT, createAddress);

module.exports = router;
