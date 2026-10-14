import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from backend/.env");
}

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

db.on("error", (err) => {
  console.error("Unexpected PostgreSQL pool error:", err.message);
});

export default db;