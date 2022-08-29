require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

const app = express();


// Database 
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', routes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})