const Router = require("express");
const {
  createProduct,
  getProduct,
  removeProduct,
} = require("../controllers/product.controller.js");
const { verifyJWT } = require("../middlewares/authenticateUser.js");
const { uploadOnMulter } = require("../middlewares/multer.js");
const router = Router();

router
  .route("/add-product")
  .post(uploadOnMulter.array("avatar", 8), createProduct);
router.route("/get-product").get(getProduct);
router.route("/remove-product/:id").delete(removeProduct);

module.exports = router;
