import { Router } from "express";
import { addPost, allPosts, deletePost } from "../controllers/postController.js";

const postRouter: Router = Router();

postRouter.get("/allPosts", allPosts);
postRouter.post("/new", addPost);
postRouter.delete("/delete", deletePost);

export default postRouter;