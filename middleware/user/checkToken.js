import  jwt  from "jsonwebtoken";
import url from "url";

export function user_token_url(req, res, next) {
    const urltoken = url.parse(req.url,true);
    let token = urltoken.query.token;
    let productId = urltoken.query.productId;
    let page = urltoken.query.page;
    // console.log(token);
    // console.log(token);
    // let token = req.header["authorization"];
    if (!token) {
        res.status(403).json({ success: false, message: "token missing" });
    } else {
        //  token = token.split(" ")[1];
        jwt.verify(token, process.env.USER_KEY, (err, payload) => {
            if (err) {
                res.status(403).json({ success: false, message: "unauthorized token"+err });
            } else {
                req.productId = productId;
                req.userId = payload.userId;
                req.page = page;
                 console.log(req.page);
                next();
            }
        });
    }
}


export function user_token_header(req, res, next) {
    let token = req.headers["authorization"];

    // console.log(token);
    // let token = req.header["authorization"];
    if (!token) {
        res.status(403).json({ success: false, message: "token missing" });
    } else {
         token = token.split(" ")[1];
        jwt.verify(token, process.env.USER_KEY, (err, payload) => {
            if (err) {
                res.status(403).json({ success: false, message: "unauthorized token"+err });
            } else {
                req.userId = payload.userId;
                // console.log(req.userId);
                next();
            }
        });
    }
}


