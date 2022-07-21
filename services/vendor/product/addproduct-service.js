// import { vendorId } from "../../../middleware/vendor/checkToken.js";
import { addProductmodel } from "../../../scema/vendor/product/addproduct-scema.js";


export async function addproduct(body,vendorId){
    // const Body = body ;
    // console.log(Body);
  body.vendorId=vendorId;
    return  new Promise(async (resole , reject)=>{
      try{
        // console.log("service");
        let data = new addProductmodel(body);
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
          
             reject("Something is worng"+e);
          
        }
    })
}