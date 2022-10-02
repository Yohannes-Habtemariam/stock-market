import { check } from "express-validator";

const sigupValidator = () => {
    return([
        check("username")
        .trim().escape().isLength({min: 3, max:10})
        .withMessage("User name must be at least 3 characters and at most 10 characters."),

        check("password")
        .isStrongPassword()
        .withMessage("Password must be at least 8 characters, contain at least 1 lowercase, 1 uppercase, 1 numeric, and 1 symbol"),

        check("email")
        .normalizeEmail().isEmail()
        .withMessage("Email requires to fulfill all the requirements.")
    ])
};

export default sigupValidator;