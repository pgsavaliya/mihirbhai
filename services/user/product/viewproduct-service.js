import dotenv from "dotenv";
import { viewproductmodel,viewordermodel } from "../../../scema/user/product/viewproduct-scema.js";
dotenv.config();
// import { adminRegister1 } from "../scema/admin";


export async function viewproduct(input) {
  // console.log(input.page)
  return new Promise(async (resole, reject) => {
    try {
      let $limit = 2;
    //  console.log(input)
      if (!input.userId) {
        // console.log("Pavan");
        var reasult = await viewproductmodel.aggregate([
          {$skip:(input.page - 1) * $limit},
          {$limit:$limit}
        ]);
      } else {
        console.log(input.userId);
        // console.log("Pavan");
        var reasult = await viewordermodel.find({ userId: input.userId });

      }
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
