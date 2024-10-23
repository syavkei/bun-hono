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
