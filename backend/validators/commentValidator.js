import { check } from "express-validator";

const commentValidator = () => {
    return [
        check("firstName")
        .escape().trim().isLength({min: 2})
        .withMessage("First name requires at least 3 characters"),

        check("lastName")
        .escape().trim().isLength({min: 3})
        .withMessage("Last name requires at least 3 characters"),

        check("telephone")
        .isNumeric()
        .withMessage("Telephone has only number characters"),

        check("email")
        .normalizeEmail().isEmail()
        .withMessage("The email has an issue"),

        check("textarea")
        .escape().trim().isLength({min: 100})
        .withMessage("Textarea requires at least 100 characters")
    ]
}
export default commentValidator;