import express from "express";
const v1 = express();

import userRoute from "./user/user.js";
import vendorRoute from "./vendor/vendor.js";

v1.get("/", (req, res) => {
  res.status(200).json({ message: "v1 routes working test" });
});

v1.use("/user", userRoute);
v1.use("/vendor", vendorRoute);

// module.exports = v1;
export default v1;
// export const v11 = mongoose.model("Pavan", v1);
