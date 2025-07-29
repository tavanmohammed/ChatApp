import { upsertStreamUser } from "../lib/stream.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



export async function signup(req, res) {
  const { email, password, fullName } = req.body;

  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists, please use a different one" });
    }

    const idx = Math.floor(Math.random() * 100) + 1; // generate a number between 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      fullName,
      password: hashedPassword,
      profilePic: randomAvatar,
    });

    try {
        await upsertStreamUser({
    
            id:newUser._id.toString(),
            name:newUser.fullName,
            image: newUser.profilePic || "",
        });
        console.log(`Stream user created for ${newUser.fullName}`);
        } catch (error) {
        console.log("Error creating stream user:", error)
        }


    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1000d",
    });

    

   res.cookie("jwt", token, {
    maxAge: 1000 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks,
    sameSite: "strict", //prevent CSRF attacks
    secure: process.env.NODE_ENV==="production"
   })

   res.status(201).json({success: true, user:newUser})

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
export async function login(req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Compare password
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Generate token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1000d",
      });
  
      // Set cookie
      res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true, // prevent XSS
        sameSite: "strict", // prevent CSRF
        secure: process.env.NODE_ENV === "production"
      });
  
      return res.status(200).json({
        success: true,
        user: {
          id: user._id,
          email: user.email,
          fullName: user.fullName,
          profilePic: user.profilePic
        }
      });
  
    } catch (error) {
      console.error("Error in login controller", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
export async function logout(req, res) {
  res.clearCookie("jwt")
  res.status(200).json({ success: true, message: "Logout successful" });
}


export async function onboard(req, res) {
  try {
    const userId = req.user._id;
    const { fullName, bio, nativeLanguage, learningLanguage, location } = req.body;

    if (!fullName || !bio || !nativeLanguage || !learningLanguage || !location) {
      return res.status(400).json({
        message: "All fields are required",
        missingFields: [
          !fullName && "fullName",
          !bio && "bio",
          !nativeLanguage && "nativeLanguage",
          !learningLanguage && "learningLanguage",
          !location && "location",
        ].filter(Boolean),
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...req.body, isOnboarded: true },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    // --- Update Stream user ---
    try {
      const response = await upsertStreamUser({
        id: updatedUser._id.toString(),
        name: updatedUser.fullName || "Unnamed User",
        image: updatedUser.profilePic || "",
      });
      console.log("Stream response:", response);
    } catch (streamError) {
      console.error("Error updating stream user during onboarding:", streamError);
    }

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Onboarding error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
