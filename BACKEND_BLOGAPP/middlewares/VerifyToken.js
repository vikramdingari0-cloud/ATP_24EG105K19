import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies?.token

    if (!token) {
      return res.status(401).json({ message: "Please login first" })
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded

    next()
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" })
  }
}