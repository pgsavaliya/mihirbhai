import dotenv from "dotenv";
import {
  viewproductmodel
} from "../../../scema/vendor/product/viewproduct-scema.js";
dotenv.config();
// import { adminRegister1 } from "../scema/admin";

export async function viewproduct(input) {
  console.log(input);
  return new Promise(async (resole, reject) => {
    try {
      
      var reasult = await viewproductmodel.find({vendorId:input});
      
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
