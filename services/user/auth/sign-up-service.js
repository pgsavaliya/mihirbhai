import { userRegistermodel } from "../../../scema/user/auth/sign-up-scema.js";
// import { adminRegister1 } from "../scema/admin";


export async function registration(input){
    return  new Promise(async (resole , reject)=>{
      try{
        let data = new userRegistermodel(input);
          //  let reasult = await data.save();
          if (await data.save()) {
           resole("Data Inserted")
          } else {
            // res.send("Data Not Inserted");
            reject("Data Not Inderted")
          }
        }
        catch(e){
          // console.log(e.code);
          if(e.code == 11000)
          {
            reject("THis email is already regested please use different email");
          }
          else
          {
             reject("Something is worng1234");
          }
        }
    })
}