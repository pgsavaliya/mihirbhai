import mongoose from "mongoose";
const productComment = new mongoose.Schema(
  {
      Comment: String,
      productId: mongoose.Schema.Types.ObjectId,
      userId: mongoose.Schema.Types.ObjectId,
      Date: Date
    },
    { collection: "product-comment" }
);
export const productCommentmodel = mongoose.model("productComment", productComment);

