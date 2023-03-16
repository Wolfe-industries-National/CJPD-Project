const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
const {PDFDocument} = require('pdf-lib');
const {readFile, writeFile} = require('fs/promises');

// Functions for Forms
async function createPdf(input, output) {
    // try {
    //     const pdfDoc = await PDFDocument.load(await readFile(input));
    //
    //     // modify doc, fill out form
    //     const fieldNames = pdfDoc
    //         .getForm()
    //         .getFields()
    //         .map((f) => f.getName());
    //     console.log({fieldNames});
    //
    //     const form = pdfDoc.getForm();
    //
    //     form.getTextField('Text2').setText('John Doe');
    //
    //     const pdfBytes = await pdfDoc.save();
    //     await writeFile(output, pdfBytes);
    //     console.log('PDF created!');
    //
    // } catch (err) {
    //     console.log(err);
    // }
    console.log(input, output);
}

//


// Connect to DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the CJPD App'})
})
app.get('/api/v1/officerUnit/test', (req, res) => {
    res.status(200).json({message: 'Welcome to the CJPD App'})
})

app.get('/api/v1/formFunctions/', (req, res) => {
    console.log("NODEJS");
    console.log(req.query);
    res.status(200).json({message: 'Function from nodeJS running'});
})

// Routes
// user api routes
app.use('/api/v1/users', require('./routes/userRoutes'));

// Synthetic Data Api Routes
// officerUnit api routes
app.use('/api/v1/officerUnit', require('./routes/officerUnitRoutes'));
// telephone api routes
app.use('/api/v1/telephone', require('./routes/telephoneRoutes'));
// address api routes
app.use('/api/v1/address', require('./routes/addressRoutes'));
// vehicle api routes
app.use('/api/v1/vehicle', require('./routes/vehicleRoutes'));
// property api routes
app.use('/api/v1/property', require('./routes/propertyRoutes'));
// BusOrg api routes
app.use('/api/v1/bus-org', require('./routes/busOrgRoutes'));
// Occurrence api routes
app.use('/api/v1/occurrence', require('./routes/occurrenceRoutes'));
// Person api routes
app.use('/api/v1/person', require('./routes/personRoutes'));
// forms Data Api Routes
app.use('/api/v1/form', require('./routes/formRoutes'));


// Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));