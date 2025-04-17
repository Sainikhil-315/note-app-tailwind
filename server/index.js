const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoDB = require('./db/connection.js');
require('dotenv').config();

mongoDB();

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});