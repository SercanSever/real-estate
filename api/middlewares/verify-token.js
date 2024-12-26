import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.utoken;
  console.log(token);
  if (!token)
    return res.status(401).json({ message: "You are not logged in!" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return false;
    req.userId = payload.id;

    next();
  });
};
