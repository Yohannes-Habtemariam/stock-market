import express from "express";
import { countClients } from "../controllers/adminController.js";
import isAdmin from "../middlewares/checkIsAdmin.js";


const router = express.Router();
router.use(isAdmin);

router.get("/:id/count", countClients);

export default router;