
import { validationResult } from "express-validator";
 import { addproduct } from "../../../services/vendor/product/addproduct-service.js";

export async function AddProduct(req, res){
    try {
    //  console.log(req.vendorId);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{

        // console.log(req.headers["authorization"]);
     const response =  await addproduct(req.body,req.vendorId);
    // const response = "okay"
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }
