import {body} from "express-validator";

export const vandorloginvalidation = [
    body("email","Enter a valid email").isEmail(),
];
