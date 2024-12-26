import prisma from "../lib/prisma";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
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
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  const {
    title,
    price,
    img,
    address,
    city,
    bedroom,
    bathroom,
    latitude,
    longitude,
    type,
    property,
  } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        price,
        img,
        address,
        city,
        bedroom,
        bathroom,
        latitude,
        longitude,
        type,
        property,
      },
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    price,
    img,
    address,
    city,
    bedroom,
    bathroom,
    latitude,
    longitude,
    type,
    property,
  } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: id },
      data: {
        title,
        price,
        img,
        address,
        city,
        bedroom,
        bathroom,
        latitude,
        longitude,
        type,
        property,
      },
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({ where: { id: id } });
    res.json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
