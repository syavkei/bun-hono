import { Context } from "hono";
import prisma from "../../prisma/client";

// Get All post
export const getPosts = async (c: Context) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { id: "desc" },
    });
    return c.json(
      {
        success: true,
        message: "Posts fetched successfully",
        data: posts,
      },
      200
    );
  } catch (e: unknown) {
    console.error(e);
  }
};

// Create Post
export async function createPost(c: Context) {
  try {
    // Get body request
    const body = await c.req.parseBody();

    const title = typeof body["title"] === "string" ? body["title"] : "";
    const content = typeof body["content"] === "string" ? body["content"] : "";

    // create post
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });

    return c.json(
      {
        success: true,
        message: "Post created successfully",
        data: post,
      },
      201
    );
  } catch (e: unknown) {
    console.error(e);
  }
}
