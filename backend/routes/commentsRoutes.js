import express from "express";
import { deleteSingleComment, getComment, postComment } from "../controllers/commentController.js";
import checkValidation from "../validators/checkValidation.js";
import commentValidator from "../validators/commentValidator.js";
import requiredValues from "../validators/requiredValues.js";

const router = express.Router();


router.get("/", getComment);

router.post("/", requiredValues(["firstName", "lastName", "telephone", "email", "textarea"]), commentValidator(), checkValidation, postComment);

router.delete("/:id", deleteSingleComment);

export default router;