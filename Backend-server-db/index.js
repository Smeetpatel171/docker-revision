// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

/* -------------------- MongoDB Connection -------------------- */
mongoose
  .connect("mongodb://mongodb:27017/demoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* -------------------- Mongoose Model -------------------- */
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
});

const User = mongoose.model("User", userSchema);

/* -------------------- Routes -------------------- */

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Node.js + Mongoose server is running.");
});

// Example API route
app.get("/api/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}! 👋` });
});

// Example POST route
app.post("/api/data", (req, res) => {
  const { key, value } = req.body;
  res.json({ received: { key, value } });
});

/* ---- User Routes ---- */

// Add a new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* -------------------- Start Server -------------------- */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
