// Simple Node.js Server with Express

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Node.js server is running.");
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

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
