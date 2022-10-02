import { check } from "express-validator";
/*
Validators
    - npm install express-validator
    - import {check} from "express-validator"
Express validation requires three steps:
    - validation definition function - requiredValues
    - validator function - checkValidation
    -routes - requiredValues(), checkValidation
*/

const requiredValues = (props) => {

    let checks = [];

    props.forEach(field => {
        checks.push(
            check(field)
            .notEmpty()
            .withMessage(`${field} is required`))
    });

    return checks;
}

export default requiredValues;