import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  //hash pass
  const hashedPassword = await bcrypt.hash(password, 10);
  //save db
  try {
    await prisma.user.create({
      data: {
        username: name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    //check if user exists
    const user = await prisma.user.findUnique({ where: { username: name } });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    //check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    //generate cookie token
  } catch (error) {
    res.status(500).json({ message: `Error : ${error.message}` });
  }

  res.json({ message: "DB Operations Login" });
};

export const logout = (req, res) => {
  res.json({ message: "DB Operations Logout" });
};
