import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controllers/chat-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const router = express.Router();
router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.post("/read", verifyToken, readChat);
export default router;
