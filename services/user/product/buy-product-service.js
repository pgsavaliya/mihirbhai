import { buyProductmodel,showproductmodel } from "../../../scema/user/product/buy-product-scema.js";


export async function buyproduct(input){
    return  new Promise(async (resole , reject)=>{
      try{
        let userId = input.userId;
        var productData = await showproductmodel.findOne({"_Id":input.productId},{productId:"$_id",name:1,color:1,size:1,brand:1,userId:1,_id:0}); 
        productData._doc.userId=userId;
        // productData._doc.productId = input.productId;
        // productData._doc.userId = input.userId;
        // delete productData._doc._id;
        console.log("productData",productData);
        // console.log(input.userId);

        let data = new buyProductmodel(productData._doc);
            let reasult = await data.save();
           if (await data.save()) {
            resole("Thank You For Buying.");
          } else {
            // res.send("Data Not Inserted");
            reject("Product not buy");
          }
        }
        catch(e){
          // console.log(e.code);
             reject("Something is worng"+e);
          
        }
    })
}