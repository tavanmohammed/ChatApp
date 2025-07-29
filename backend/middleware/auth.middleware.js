import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

        //  Assign decoded result

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //  Validate decoded content
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // ✅ Find user and attach to request
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    return res.status(500).json({ message: "Internal Server Error (auth)" });
  }
};

export default protectRoute;
