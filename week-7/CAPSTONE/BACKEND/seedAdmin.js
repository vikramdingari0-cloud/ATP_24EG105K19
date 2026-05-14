import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { UserModel } from "./models/UserModel.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    // 1. Connect to DB
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");

    const adminEmail = "admin@blogapp.com";
    const adminPassword = "admin123";

    // 2. Check if admin exists
    const existingAdmin = await UserModel.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("ℹ️ Admin already exists with email:", adminEmail);
      process.exit(0);
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // 4. Create Admin
    const adminUser = new UserModel({
      firstName: "Super",
      lastName: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "ADMIN",
      isUserActive: true,
    });

    await adminUser.save();

    console.log("==========================================");
    console.log("🎉 SUCCESS: Admin account created!");
    console.log("📧 Email: " + adminEmail);
    console.log("🔑 Password: " + adminPassword);
    console.log("==========================================");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
};

seedAdmin();
