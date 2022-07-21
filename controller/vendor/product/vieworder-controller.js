import { vieworder1 } from "../../../services/vendor/product/vieworder-service.js";


export async function ViewOrderVendor1(req, res){
   try {
    console.log(req.vendorId);
   
      //  console.log(req.headers["authorization"]);
     const response =  await vieworder1(req.vendorId);
   // const response = "okay"
     res.send(response);
   
   } catch (error) {
     res.status(404).send(error || "something worng");
   }
 }
