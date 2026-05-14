import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import authorRoutes from "./routes/author.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/* ================= MIDDLEWARES ================= */
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

/* ================= ROUTES ================= */
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/author", authorRoutes);
app.use("/admin", adminRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;