import mongoose from "mongoose";
// console.log("model");
const vendorRegister = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Email Id!`,
      },
      required: [true, "User Email required"],
    },
    password: {
      type: String,
    },
    mobileNumber:{
      type: Number,
      validate:{
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Mobile Number!`,
      },
      required: [true, "User Email required"],
    },
  },
  { collection: "vendor" }

);
//  console.log(adminRegister);
export const vendorRegistermodel = mongoose.model("VendorRegister", vendorRegister);
