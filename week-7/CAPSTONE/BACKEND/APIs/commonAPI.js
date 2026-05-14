import express from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { verifyToken } from "../middlewares/VerifyToken.js";

dotenv.config();

export const commonApp = express.Router();

/* ================= REGISTER ================= */
commonApp.post("/users", async (req, res, next) => {
  try {
    const allowedRoles = ["USER", "AUTHOR"];
    const newUser = req.body;

    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // hash password
    newUser.password = await hash(newUser.password, 12);

    const userDoc = new UserModel(newUser);
    await userDoc.save();

    res.status(201).json({
      success: true,
      message: "User created",
    });
  } catch (err) {
    next(err);
  }
});

/* ================= LOGIN ================= */
commonApp.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    // SECURE COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 60 * 60 * 1000,
    });

    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({
      success: true,
      message: "Login success",
      payload: userObj,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= LOGOUT ================= */
commonApp.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
  });

  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

/* ================= AUTH CHECK ================= */
commonApp.get(
  "/check-auth",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Authenticated",
      payload: req.user,
    });
  }
);

/* ================= CHANGE PASSWORD ================= */
commonApp.put(
  "/password",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({
          message: "Both passwords required",
        });
      }

      const user = await UserModel.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await compare(currentPassword, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Current password incorrect",
        });
      }

      const isSame = await compare(newPassword, user.password);

      if (isSame) {
        return res.status(400).json({
          message: "New password cannot be same as old password",
        });
      }

      user.password = await hash(newPassword, 12);
      await user.save();

      res.status(200).json({
        success: true,
        message: "Password updated",
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);