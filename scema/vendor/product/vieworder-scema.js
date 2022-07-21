import mongoose from "mongoose";
const viewordervendor = new mongoose.Schema(
  {
    vendorId: String,
  },
  { collection: "buy-product" }
);
//  console.log(adminRegister);
export const viewordermodel = mongoose.model("ViewOrderVendor", viewordervendor);

  