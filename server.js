// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}


// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const Note = require("./models/note");
const Notes = require("./models/note");

// create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connect to database
connectToDb();

// Routing 

app.get('notes' );

app.get('/notes/:id');

app.post('/notes');

app.put('/notes/:id');

app.delete('/notes/:id');
// Start over server
app.listen(process.env.PORT);