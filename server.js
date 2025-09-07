
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // ✅ dynamic port for Render

app.use(cors()); 
app.use(express.json());

// Example REST endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// POST endpoint
app.post("/api/message", (req, res) => {
  const { name } = req.body;
  res.json({ reply: `Hello, ${name}! Your data was received.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

