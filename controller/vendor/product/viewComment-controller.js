import { viewComment1 } from "../../../services/vendor/product/viewComment-service.js";

export async function viewComment(req, res)
{
    try{
    // console.log(req.vendorId);
    // console.log(req.productId);
    const response =  await viewComment1(req.productId);
    res.send(response);
    }
    catch(e){
     res.status(404).send(error || "something worng");
    }
}