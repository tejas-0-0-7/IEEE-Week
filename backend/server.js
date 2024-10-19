const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const eventsRouter = require('./routes/events');

dotenv.config();

const app = express();

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventsRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
