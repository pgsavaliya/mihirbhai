import { viewproduct } from "../../../services/user/product/viewproduct-service.js";
import url from "url";

export async function ViewProductUser(req, res){
   try {
    // console.log(req.vendorId);
    const url1 = url.parse(req.url,true);
    let page = url1.query.page;
    req.page = page;
    // console.log(req.payload.userId);
    // console.log(page);
       // console.log(req.headers["authorization"]);
    const response =  await viewproduct(req);
   // const response = "okay"
     res.send(response);
   } catch (error) {
     res.status(404).send(error || "something worng");
   }
 }
