import  jwt  from "jsonwebtoken";
import url from "url";

export function addproduct_token(req, res, next) {
    let token = req.headers["authorization"];
    // console.log(token)
    if (!token) {
        res.status(403).json({ success: false, message: "token missing" });
    } else {
        token = token.split(" ")[1];
        jwt.verify(token, process.env.VENDOR_KEY, (err, payload) => {
            if (err) {
                res.status(403).json({ success: false, message: "unauthorized token" });
            } else {
                req.vendorId = payload.vendorId;
                
                next();
            }
        });
        
    }
    
}

export function vendorIdUrl_token(req, res, next) {
    const urltoken = url.parse(req.url,true);
    let token = urltoken.query.vendorId;
    let productId = urltoken.query.productId;
    let token_query = urltoken.query;
    // console.log(token);
    // let token = req.header["authorization"];
    if (!token) {
        res.status(403).json({ success: false, message: "token missing" });
    } else {
        //  token = token.split(" ")[1];
        jwt.verify(token, process.env.VENDOR_KEY, (err, payload) => {
            if (err) {
                res.status(403).json({ success: false, message: "unauthorized token"+err });
            } else {
                req.vendorId = payload.vendorId;
                req.productId = productId;
                next();
            }
            
        });
        
    }
    
}
