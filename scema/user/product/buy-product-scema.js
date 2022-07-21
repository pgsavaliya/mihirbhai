import mongoose from "mongoose";
const buyproduct = new mongoose.Schema(
  {
      name: String,
      color: String,
      size: Number,
      price: Number,
      brand: String,
      userId: mongoose.Schema.Types.ObjectId,
      productId: mongoose.Schema.Types.ObjectId
    },
    { collection: "buy-product" }
);
//  console.log(adminRegister);
export const buyProductmodel = mongoose.model("BuyProduct", buyproduct);

const showproduct = new mongoose.Schema(
  {
      _id:String,
    },
    { collection: "product" }
);
//  console.log(adminRegister);
export const showproductmodel = mongoose.model("ShowProduct", showproduct);
