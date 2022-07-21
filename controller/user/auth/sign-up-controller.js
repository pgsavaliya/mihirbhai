import { validationResult } from "express-validator";
import { registration } from "../../../services/user/auth/sign-up-service.js";

export async function userRegister(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      console.log(req.body);
     const response =  await registration(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

