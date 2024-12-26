import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";
const router = express.Router();
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
export default router;
