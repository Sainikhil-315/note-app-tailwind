const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoDB = require('./db/connection.js');
require('dotenv').config();

mongoDB();

// Import routes
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});