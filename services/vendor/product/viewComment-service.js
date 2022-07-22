import dotenv from "dotenv";
import Mongoose from "mongoose";
import { viewCommentmodel } from "../../../scema/vendor/product/viewComment-scema.js";
dotenv.config();

// import { adminRegister1 } from "../scema/admin";

export async function viewComment1(input) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input);

      var reasult = await viewCommentmodel.aggregate([
        {
          $match: {
            _id: Mongoose.Types.ObjectId(input),
          },
        },
        {
          $lookup:{
            from: "product-comment",
            localField: "_id",
            foreignField: "productId",
            as: "commentData",
          }
        },
        
        {
          $unwind: "$commentData",
        },
        {
          $sort:{
            "commentData.Date": -1,
          },
        },
        {
          $project: {
            "vendorId":1,
            "_id":1,
            "productName":"name",
            "CommentId":"$commentData._id",
            "Comment":"$commentData.Comment",
            // "UserData":0,
            _id: 0,
          },
        },
        
      ]);
      if (reasult != "") {
        resole({ status: 200, reasult });
      } else {
        // console.log(input)

        reasult = "data Not Found";
        resole({ status: 403, reasult });
      }
    } catch (e) {
      // console.log(e.code);
      reject("Something is worng" + e);
    }
  });
}
