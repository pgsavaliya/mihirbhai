import { vendorLoginmodel } from "../../../scema/vendor/auth/sign-in-scema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// import { adminRegister1 } from "../scema/admin";


export async function login(input){
    return  new Promise(async (resole , reject)=>{
      try{
        // let data = new userLoginmodel(input);
          //  let reasult = await data.save();
        //   console.log(data);
          let reasult = await vendorLoginmodel.findOne({
            email: input.email,
            password: input.password,

          }); 
            if(reasult != null)
            {

              console.log(reasult);
                // reject("user not found");
                //let key1 = process.env.VENDOR_ENCRYPTION_KEY;
                //let encryptVendor = encrypt(reasult._id, key1);
                // payload = {};
                let token = jwt.sign(
                  {vendorId: reasult._id , password: reasult.password},
                  process.env.VENDOR_KEY,  
                  { expiresIn: '1h'}
              );
              // console.log("token");
              resole({ status: 200, input: token });
            }
            else{
                resole("data not found");
            }
        }
        catch(e){
          // console.log(e.code);
          
             reject("Something is worng1234"+e);
          
        }
    })
}