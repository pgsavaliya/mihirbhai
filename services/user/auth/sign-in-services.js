import { userLoginmodel } from "../../../scema/user/auth/sign-in-scema.js";
import  jwt  from "jsonwebtoken";
// import { adminRegister1 } from "../scema/admin";


export async function login(input){
    return  new Promise(async (resole , reject)=>{
      try{
        // let data = new userLoginmodel(input);
          //  let reasult = await data.save();
        //   console.log(data);
          let reasult = await userLoginmodel.findOne(input); 
            if(reasult == "")
            {
                reject("user not found");
            }
            else{
              let token = jwt.sign(
                { userId: reasult._id , password: reasult.password},
                process.env.USER_KEY,  
                { expiresIn: '1h'}
              );
              resole({ status: 200, input: token });
            }
            
        }
        catch(e){
          // console.log(e.code);
          
             reject("Something is worng1234"+e);
          
        }
    })
}