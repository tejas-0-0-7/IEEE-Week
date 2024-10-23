const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const eventsRouter = require("./routes/events");
const contactRouter = require("./routes/contact")

dotenv.config();

const app = express();

// Connect to MongoDB
console.log("Attempting to connect to MongoDB...");
connectDB()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

//Tejas trial start
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//Tejas trial end

// Routes
app.use("/api/events", eventsRouter);
app.use(contactRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
