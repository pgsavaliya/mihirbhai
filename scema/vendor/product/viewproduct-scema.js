import mongoose from "mongoose";
const viewproduct1 = new mongoose.Schema(
  {
    vendorId:{ type: mongoose.Schema.Types.ObjectId
    }
  },
  { collection: "product" }
);
//  console.log(adminRegister);
export const viewproductmodel = mongoose.model("ViewProduct1", viewproduct1);

  