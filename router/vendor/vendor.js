import  express  from "express";
import { vendorlogin } from "../../controller/vendor/auth/sign-in-controller.js";
import { vendorRegister } from "../../controller/vendor/auth/sign-up-controller.js";
import { AddProduct } from "../../controller/vendor/product/addproduct-controller.js";
import { ViewOrderVendor1 } from "../../controller/vendor/product/vieworder-controller.js";
import { ViewProductVendor } from "../../controller/vendor/product/viewproduct-controller.js";
import  {addproduct_token,vendorIdUrl_token}  from "../../middleware/vendor/checkToken.js";
import { vendorregvalidation } from "../../middleware/vendor/sign-up.js";



const vendorRoute = express();
vendorRoute.use(express.json());
vendorRoute.post("/", (req, res) => {
    res.status(200).json({ message: "vendor route is working" });
    // console.log(req.body);
});

vendorRoute.post("/sign-up",vendorregvalidation,vendorRegister);
vendorRoute.post("/sign-in",vendorlogin);
vendorRoute.post("/Product",addproduct_token,AddProduct);
vendorRoute.get("/Product",vendorIdUrl_token,ViewProductVendor);
vendorRoute.get("/viewOrders",vendorIdUrl_token,ViewOrderVendor1);

export default vendorRoute;
