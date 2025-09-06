const express = require("express");
const cors = require("cors");

const app = express();

// Allow frontend at port 5173
app.use(cors());


app.use(express.json());

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API 🚀" });
});

// Example POST endpoint
app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
