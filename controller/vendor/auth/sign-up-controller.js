import { validationResult } from "express-validator";
import { registration } from "../../../services/vendor/auth/sign-up-service.js";


export async function vendorRegister(req, res){
    try {
    //    console.log("cont");

        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
     const response =  await registration(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

