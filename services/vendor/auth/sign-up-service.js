import { vendorRegistermodel } from "../../../scema/vendor/auth/sign-up-scema.js";



export async function registration(input){
    return  new Promise(async (resole , reject)=>{
      try{
        // console.log("service");
        let data = new vendorRegistermodel(input);
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