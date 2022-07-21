import mongoose from "mongoose";
// console.log("model");
const productRegister = new mongoose.Schema(
  {
    name: {
      type:String,
      required:true
    },
    color: String,
    size: Number,
    price: Number,
    brand: String,
    vendorId: mongoose.Schema.Types.ObjectId,
  },
  { collection: "product" }

);
//  console.log(adminRegister);
export const addProductmodel = mongoose.model("Add Product", productRegister);
