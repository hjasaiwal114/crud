// Load env variables
require("dotenv").config();

// Import dependencies
const express = require('express')

// Create an express app
const app = express();

// Routing 
app.get('/', (req, res) => {
    res.json({hello : "world"});
})

// Start over server
app.listen(process.env.PORT);