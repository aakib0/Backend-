const express = require('express');   // import express
const app = express();                // create express app
const PORT = 3000;                    // choose a port (3000 is common)

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, Express is working!');
});

// Start the server
app.listen(PORT, () => {
  //console.log(`Server running at http://localhost:${PORT}`);
});


// npm install --save-dev nodemon


app.get('/login', (req, res) => {
    res.send('Login Page');
});


app.get('/register', (req, res) => {
    res.send('<H1>Hello your register sucessfully</H1>');
});

// Start the server
app.listen(8080, () => {
    console.log('Auth service running on port 8080');
});
