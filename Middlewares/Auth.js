import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");

  if (!token) return res.json({ message: "Login first" });

  const decoded = jwt.verify(token, process.env.JWT);

  const id = decoded.userId;

  let user = await User.findById(id);

  if (!user) return res.json({ message: "User not found" });

  req.user = user;
  next();
};