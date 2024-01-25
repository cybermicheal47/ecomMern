const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");
const LoginRoute = require("./routes/login");
const ProductsRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const PaystackRoute = require("./routes/paystack");
const connectDB = require("./config/dbcon");
const cors = require("cors");
require("dotenv").config();
const https = require("https");
app.use(cors());
dotenv.config();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", [
    "*",
    "https://ecommm-t6dm.onrender.com/",
  ]);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

connectDB();

//endpoint for api
app.get("/api/", () => {
  console.log("test is");
});

app.use(express.json());
//Routes
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/auth", LoginRoute);
app.use("/api/products", ProductsRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/paystack", PaystackRoute);

app.listen(process.env.PORT || 3500, () => {
  console.log("backend");
});
