import mongoose from "mongoose";
const viewproduct = new mongoose.Schema(
  {
  },
  { collection: "product" }
);
//  console.log(adminRegister);
export const viewproductmodel = mongoose.model("ViewProduct", viewproduct);


const vieworder = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
  },
  { collection: "buy-product" }
);
//  console.log(adminRegister);
export const viewordermodel = mongoose.model("ViewOrder", vieworder);