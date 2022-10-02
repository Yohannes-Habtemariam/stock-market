import express from "express";
import { signupPost } from "../controllers/signupController.js";
import checkValidation from "../validators/checkValidation.js";
import requiredValues from "../validators/requiredValues.js";
import sigupValidator from "../validators/signupValidator.js";

const router = express.Router();

router.post("/",requiredValues(["username", "password", "email"]), sigupValidator(), checkValidation, signupPost);

export default router;