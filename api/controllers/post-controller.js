import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  try {
    const query = req.query;
    const posts = await prisma.post.findMany({
      where: {
        city:
          {
            contains: query.city || "",
            mode: "insensitive",
          } || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 10000000,
        },
      },
    });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
      include: {
        PostDetail: true,
        User: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    let userId;
    const token = req.cookies.utoken;
    if (!token) userId = null;
    else
      jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) userId = null;
        else userId = payload.id;
      });

    const saved = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: userId,
          postId: post.id,
        },
      },
    });

    res.status(200).json({ ...post, isSaved: saved ? true : false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.create({
      data: {
        ...body.postData,
        User: {
          connect: {
            id: tokenUserId,
          },
        },
        PostDetail: {
          create: body.postDetail,
        },
      },
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
    });
    if (post.userId !== tokenUserId)
      return res
        .status(403)
        .json({ message: "You are not allowed to update this post" });

    const updatedPost = await prisma.post.update({
      where: { id: post.id },
      data: {
        ...body,
      },
    });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
    });
    if (post.userId !== tokenUserId)
      return res
        .status(403)
        .json({ message: "You are not allowed to delete this post" });

    await prisma.post.delete({ where: { id: post.id } });
    res.json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
