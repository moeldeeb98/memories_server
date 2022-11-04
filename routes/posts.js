import express from "express";
<<<<<<< HEAD
import { getPosts } from "../controllers/posts";
=======
import { getPosts, createPost } from "../controllers/posts.js";
>>>>>>> c804f01ec7ae3e116a8ab9c07678b7778bad5a3d

const router = express.Router();

router.get("/", getPosts);
<<<<<<< HEAD
=======
router.post("/", createPost);

export default router;
>>>>>>> c804f01ec7ae3e116a8ab9c07678b7778bad5a3d
