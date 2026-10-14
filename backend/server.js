import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://yousufkhan.vercel.app",
    ],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone = "", message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const result = await pool.query(
  `INSERT INTO contacts (name, email, phone, message)
   VALUES ($1, $2, $3, $4)
   RETURNING id`,
  [name, email, phone, message]
);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      id: result.rows[0].id,
    });
  } catch (err) {
    console.error("Contact form error:", err);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});