const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require(`${__dirname}/config/db`);
const errorHandler = require(`${__dirname}/middleware/errorMiddleware`);
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
// user api routes
app.use('/api/v1/users', require(`${__dirname}/routes/userRoutes`));

// Synthetic Data Api Routes
// officerUnit api routes
app.use('/api/v1/officerUnit', require(`${__dirname}/routes/officerUnitRoutes`));
// telephone api routes
app.use('/api/v1/telephone', require(`${__dirname}/routes/telephoneRoutes`));
// address api routes
app.use('/api/v1/address', require(`${__dirname}/routes/addressRoutes`));
// vehicle api routes
app.use('/api/v1/vehicle', require(`${__dirname}/routes/vehicleRoutes`));
// property api routes
app.use('/api/v1/property', require(`${__dirname}/routes/propertyRoutes`));
// BusOrg api routes
app.use('/api/v1/bus-org', require(`${__dirname}/routes/busOrgRoutes`));
// Occurrence api routes
app.use('/api/v1/occurrence', require(`${__dirname}/routes/occurrenceRoutes`));
// Person api routes
app.use('/api/v1/person', require(`${__dirname}/routes/personRoutes`));
// forms Data Api Routes
app.use('/api/v1/form', require(`${__dirname}/routes/formRoutes`));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
}


// Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));