import mongoose from "mongoose";
const vendorLogin = new mongoose.Schema(
  {
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
    }
  },
  { collection: "vendor" }
);
//  console.log(adminRegister);
export const vendorLoginmodel = mongoose.model("VendorLogin", vendorLogin);
  