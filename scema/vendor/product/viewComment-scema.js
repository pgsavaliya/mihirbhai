import mongoose from "mongoose";
const viewCommentm = new mongoose.Schema(
  {
    productId:{ 
      type: mongoose.Schema.Types.ObjectId
    },
    
  },
  { collection: "product" }
);
//  console.log(adminRegister);
export const viewCommentmodel = mongoose.model("ViewCommentm", viewCommentm);

  