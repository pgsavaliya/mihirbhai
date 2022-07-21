//database connection
import mongoose from "mongoose";
export const dbmongoose = mongoose.connect("mongodb://localhost:27017/e-commerce");

//importing all package
import express from "express";
import v1 from "./router/v1.js";

const app = express();
app.get("/", (req, res, next) => {
    console.log("root thing calling")
    res.status(200).json({ message: "Initial Route for tradeUnlisted me updated " });
  });

app.use("/v1", v1);

app.listen(5000);