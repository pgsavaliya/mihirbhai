import { viewproduct } from "../../../services/vendor/product/viewproduct-service.js";


export async function ViewProductVendor(req, res){
   try {
    console.log(req.vendorId);
   
       console.log(req.headers["authorization"]);
     const response =  await viewproduct(req.vendorId);
   // const response = "okay"
     res.send(response);
   
   } catch (error) {
     res.status(404).send(error || "something worng");
   }
 }
