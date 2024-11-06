import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post-controller.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/create", createPost);
router.put("/update", updatePost);
router.delete("/delete", deletePost);
export default router;
