import { Router } from "express";
import { getMessages } from "../controllers/indexCtrl.js";
const router = Router();

//inicial get request display the messages
router.get("/", getMessages);

export default router;
