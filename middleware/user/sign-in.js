import {body} from "express-validator";

export const userloginvalidation = [
    body("email","Enter a valid email111").isEmail(),
];
