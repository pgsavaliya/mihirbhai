import { productCommentmodel } from "../../../scema/user/product/product-comment-scema.js";


export async function productComment(input){
    return  new Promise(async (resole , reject)=>{
      try{
        // console.log(input.userId);
        // console.log(input.body.productId);
        // console.log(input.body.Comment);
        let dt =new Date();
        let date = ("0" + dt.getDate()).slice(-2);
        let month = ("0"+ (dt.getMonth()+1)).slice(-2);
        let year = dt.getFullYear();
        let hour = dt.getHours();
        let minit = dt.getMinutes();
        let second = dt.getSeconds();
        var datewithtime = year + "-" + month + "-" + date + " " + hour + ":" + minit + ":" + second;
        // console.log(datewithtime);
        // console.log(dt)
        let data1 = {
          "productId":input.body.productId,
          "userId":input.userId,
          "Comment":input.body.Comment,
          "Date":datewithtime
        }
        // console.log(data);
        // resole("Thank You For Comment.");
        // let userId = input.userId;
        // let productId = input.productId;
        let data = new productCommentmodel(data1);
            let reasult = await data.save();
           if (await data.save()) {
            resole("Thank You For Comment.");
          } else {
            reject("Your Comment not save please try again");
          }
        }
        catch(e){
             reject("Something is worng"+e);
          
        }
    })
}