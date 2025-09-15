A4OSjtjurHZAQNF5 =>atlas password
javedaakib518 =>username 


Day 1
const express = require('express');   // import express
const app = express();                // create express app
const PORT = 3000;                    // choose a port (3000 is common)

const express = require('express');

const app = express();

// A simple route
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


12:30 AM
step 1  npm init
step 2 - install express
step 3 - import express
setp 4 code padh lena

Ran npm init → created package.json.

Installed Express with npm install express.

This created:

node_modules/ → contains Express and its dependencies.

package-lock.json → locks exact versions.

Updated your package.json to include "express" under "dependencies".



<!-- Day 2 -->
Task

mongo schema 
Routes 
Contorllers

semver versioning read 

Register User 
