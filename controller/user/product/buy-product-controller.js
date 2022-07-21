import { validationResult } from "express-validator";
import { buyproduct } from "../../../services/user/product/buy-product-service.js";


export async function buyProduct(req, res){
    try {
      // console.log(req.body);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
     const response =  await buyproduct(req);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

