import "dotenv/config";
import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { pool } from "./db.js";
import { authMiddleware } from "./stats.js";

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    // Insert user and get the new id
    const result = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id",
      [email, passwordHash]
    );

    const userId = result.rows[0].id;

    // Insert default stats for this user
    await pool.query(
      "INSERT INTO stats (user_id, easy, medium, hard, elo, wins, losses) VALUES ($1, 0, 0, 0, 0, 0, 0)",
      [userId]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Register error:", err); // <- log full error
    if (err.code === "23505") {
      return res.status(400).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Missing email or password" });

  try {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

    if (result.rows.length === 0)
      return res.status(400).json({ error: "User not found" });

    const user = result.rows[0];

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/stats", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const stats = await pool.query("SELECT * FROM stats WHERE user_id=$1", [userId]);
  res.json(stats.rows);
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
