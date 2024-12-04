import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  //hash pass
  const hashedPassword = await bcrypt.hash(password, 10);
  //save db
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user != null) {
      return res.status(400).json({ message: "User already exists!" });
    }

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
  const { email, password } = req.body;
  try {
    //check if user exists
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user == null) {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    //check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    //generate cookie and token
    const age = 1000 * 60 * 60 * 24 * 7; //7 days
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        // isAdmin: true,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("utoken", token, {
        httpOnly: true,
        secure: true, //https
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    res.status(500).json({ message: `Error : ${error.message}` });
  }
};

export const logout = (req, res) => {
  res.clearCookie("utoken").status(200).json({ message: "Logout successful!" });
};
