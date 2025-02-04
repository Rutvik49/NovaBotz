const express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
const userRouter = require("./routes/user.routes.js");
const addressRouter = require("./routes/address.routes.js");
const productRouter = require("./routes/product.routes.js");

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", addressRouter);
app.use("/api/v1/products", productRouter);

module.exports = { app };
