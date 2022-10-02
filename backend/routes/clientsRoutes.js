import express from "express";
import { deleteClientAccount, deleteClientComments, deleteSingleComment, getClientComment, postClientComment } from "../controllers/clientController.js";
import authorizedClient from "../middlewares/authorizedClient.js";
import checkValidation from "../validators/checkValidation.js";
import requiredValues from "../validators/requiredValues.js";


const router = express.Router();
router.use(authorizedClient);

router.get("/:id", getClientComment);
router.post("/:id/comments", requiredValues(["comment"]), checkValidation, postClientComment);
router.delete("/:id/comments", deleteClientComments);
router.delete("/:id/comments/:commentId", deleteSingleComment);
router.delete("/:id", deleteClientAccount);

export default router;