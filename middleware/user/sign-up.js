import {body} from "express-validator";


export const userregvalidation = [
    
    body("email","Enter a valid email111").isEmail(),
body("name","Enter a valide name").isLength({ min: 3 }),
body("password","enter a valid password").isLength({ min: 5 }),
body("mobileNumber","Enter a valid mobileNumber").isNumeric({min:9})
];


// export const userregvalidation = async (req, res, next) => {
    
//     [
//         body("email","Enter a valid email").isEmail(),
//     body("name","Enter a valide name").isLength({ min: 3 }),
//     body("password","enter a valid password").isLength({ min: 5 }),
//     body("mobileNumber","Enter a valid mobileNumber").isNumeric({min:9})
//     ];
// };