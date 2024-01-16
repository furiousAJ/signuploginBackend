const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Define the MongoDB URI
const dbUri = 'mongodb+srv://anjithkj:njith038@cluster0.8uatvth.mongodb.net/signuplogin?retryWrites=true&w=majority';

// Connect to MongoDB
connectDB(dbUri);

// Routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
