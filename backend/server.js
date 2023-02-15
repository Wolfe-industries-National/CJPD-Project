const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;


// Connect to DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the CJPD App'})
})

// Routes
app.use('/api/v1/users', require('./routes/userRoutes'));


// Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));