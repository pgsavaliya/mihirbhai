import { login } from "../../../services/vendor/auth/sign-in-service.js";




export async function vendorlogin(req, res){
    try {
      
      const response =  await login(req.body);
    //   res.send(response);
  
      if (response == "") {
         res.send("Data Not Found");
      } else {
        res.send(response);
      }
    } catch (error) {
      res.status(404).send(error || "something worng123");
    }
}




