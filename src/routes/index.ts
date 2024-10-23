import { Hono } from "hono";
import {
  createPost,
  getPostById,
  getPosts,
} from "../controllers/PostController";

const router = new Hono();

router.get("/posts", (c) => getPosts(c));
router.post("/posts", (c) => createPost(c));
router.get("/posts/:id", (c) => getPostById(c));

export const Routes = router;
