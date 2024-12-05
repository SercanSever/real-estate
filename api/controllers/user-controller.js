import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const get = async (req, res) => {
  try {
    const users = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const add = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username: name,
        email,
        password: hashedPassword,
      },
    });
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const update = async (req, res) => {
  const id = req.params.id;
  if (id !== req.userId) res.status(401).json({ message: "Unauthorized" });
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: id },
      data: {
        username: name,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const remove = async (req, res) => {
  const id = req.params.id;
  if (id !== req.userId) res.status(401).json({ message: "Unauthorized" });
  try {
    await prisma.user.delete({
      where: { id: id },
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
