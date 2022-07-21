import dotenv from "dotenv";
import Mongoose from "mongoose";
import { viewproductmodel } from "../../../scema/vendor/product/viewproduct-scema.js";

dotenv.config();

export async function vieworder1(input) {
  console.log(input);
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input)
      // var reasult = await viewordermodel.find({vendorId:input});
      var reasult = await viewproductmodel.aggregate([
        {
          $match: {
            vendorId: Mongoose.Types.ObjectId(input),
          },
        },
        {
          $lookup: {
            from: "buy-product",
            localField: "_id",
            foreignField: "productId",
            as: "buyproductData",
          },
        },
        {
          $unwind: "$buyproductData",
        },
        {
          $lookup: {
            from: "user",
            localField: "buyproductData.userId",
            foreignField: "_id",
            as: "UserData",
          },
        },
        {
          $unwind: "$UserData",
        },
        {
          $project: {
            "buyproductData.productId": 1,
            "buyproductData.orderId": "$_id",
            "buyproductData.name": 1,
            "buyproductData.color": 1,
            "buyproductData.size": 1,
            "buyproductData.brand": 1,
            "buyproductData.username": "$UserData.name",
            "buyproductData.userId": 1,
            // "UserData":0,
            _id: 0,
          },
        },
      ]);
      if (reasult != "") {
        resole({ status: 200, reasult });
      } else {
        reasult = "data Not Found";
        resole({ status: 403, reasult });
      }
    } catch (e) {
      // console.log(e.code);
      reject("Something is worng" + e);
    }
  });
}
