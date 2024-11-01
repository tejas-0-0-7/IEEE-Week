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

app.use(cors({
  origin: 'https://ieeeweek.netlify.app', // Replace with your actual Netlify URL
}));
app.use(express.json());

// Routes
console.log("Setting up routes...");
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/events", eventsRouter);
app.use("/api", contactRouter);  // Assuming this is for API routes

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

// Add this just before app.listen()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});