import express from "express";
import {
  getAll,
  get,
  add,
  update,
  remove,
} from "../controllers/user-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const router = express.Router();
router.get("/getAll", verifyToken, getAll);
router.post("/add", verifyToken, add);
router.get("/:id", verifyToken, get);
router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, remove);
export default router;
