import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    });
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const get = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    const { password, ...rest } = user;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const add = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const createdUser = await prisma.user.create({
      data: {
        username: name,
        email,
        password: hashedPassword,
      },
    });
    const { password: userPassword, ...user } = createdUser;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  if (id !== req.userId) res.status(401).json({ message: "Unauthorized" });
  const { name, email, avatar, password } = req.body;
  let hashedPassword = null;
  if (password) hashedPassword = await bcrypt.hash(password, 10);

  try {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        username: name,
        email,
        ...(hashedPassword && { password: hashedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const { password: userPassword, ...user } = updatedUser;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  const id = req.params.id;
  if (id !== req.userId) res.status(401).json({ message: "Unauthorized" });
  try {
    const removedUser = await prisma.user.delete({
      where: { id: id },
    });
    const { password, ...user } = removedUser;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
