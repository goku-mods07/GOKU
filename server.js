const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname)));

// Main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "online",
    message: "GOKU server is running"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GOKU server running on port ${PORT}`);
});
