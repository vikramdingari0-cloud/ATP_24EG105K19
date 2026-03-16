import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()
const { verify } = jwt
export const verifyToken = (req, res, next) => {
  try {
    // get token from cookie
    const token = req.cookies?.token
    // check if token exists
    if (!token) {
      return res.status(401).json({message: "Please login first"})
    }
    // verify token
    const decodedToken = verify(token, process.env.SECRET_KEY)
    // attach decoded user data to request
    req.user = decodedToken
    // move to next middleware/route
    next()
  } catch (err) {
    return res.status(401).json({message: "Invalid token" })
  }
}