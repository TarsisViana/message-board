import { Router } from "express";
import addMessage from "../controllers/newMessageCtrl.js";
const router = Router();

//get request display the form
router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", addMessage);

export default router;
