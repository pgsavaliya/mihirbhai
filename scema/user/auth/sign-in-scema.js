import mongoose from "mongoose";
const userLogin = new mongoose.Schema(
  {
    email: {
      type: String,
      //mongoose.types.objectid
      //ref:collection Name
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
  { collection: "user" }
);
//  console.log(adminRegister);
export const userLoginmodel = mongoose.model("UserLogin", userLogin);
  