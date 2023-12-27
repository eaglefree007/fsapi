require("dotenv").config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dbConnect, dbDisconnect } = require('./db/dbConnection');
const UserRouter = require('./routes/UserRouter');
const HomeRouter = require('./routes/HomeRouter');
dbConnect(process.env.MONGO_URL)

const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', HomeRouter);
app.use('/user', UserRouter)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
