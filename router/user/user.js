import express from "express";
// import Router from "express";
import { userRegister } from "../../controller/user/auth/sign-up-controller.js";
import { userregvalidation } from "../../middleware/user/sign-up.js";
import { userloginvalidation } from "../../middleware/user/sign-in.js";
import { userlogin } from "../../controller/user/auth/sign-in-controller.js";
import {
  user_token_header,
  user_token_url,
} from "../../middleware/user/checkToken.js";
import { ViewProductUser } from "../../controller/user/product/viewproduct-controller.js";
import { buyProduct } from "../../controller/user/product/buy-product-controller.js";

const userapp = express();
userapp.use(express.json());
// const app = express();
userapp.get("/", (req, res) => {
  res.status(200).json({ message: "user route is working" });
  // console.log(req.body);
});

userapp.post("/sign-up", userregvalidation, userRegister);
userapp.post("/sign-in", userloginvalidation, userlogin);
userapp.get("/Product", ViewProductUser);
userapp.get("/buyproduct", user_token_url, buyProduct);
userapp.get("/viewOrder", user_token_url, ViewProductUser);

export default userapp;
