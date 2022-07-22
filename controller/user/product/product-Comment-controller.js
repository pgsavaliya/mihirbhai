import { productComment } from "../../../services/user/product/product-comment-service.js";


export async function productCommment1(req, res){
      // console.log(req.body); 
     const response =  await productComment(req);
      res.send(response);
}

