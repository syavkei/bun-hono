import { Hono } from "hono";
import { createPost, getPosts } from "../controllers/PostController";

const router = new Hono();

router.get("/", (c) => getPosts(c));
router.post("/", (c) => createPost(c));

export const Routes = router;
