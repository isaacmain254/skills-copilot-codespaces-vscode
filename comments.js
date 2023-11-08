// create a web server
// 1. import express
const express = require('express');
// 2. create an express app
const app = express();
// 3. listen to a port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 5. create another route
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});

// 6. create another route
app.get('/comments/:id', (req, res) => {
    res.send(`This is a comments page with id ${req.params.id}`);
});

// 7. create another route
app.get('/comments/:id/:username', (req, res) => {
    res.send(`This is a comments page with id ${req.params.id} and username ${req.params.username}`);
});

// 8. create another route
app.get('/comments/:id/:username/:age', (req, res) => {
    res.send(`This is a comments page with id ${req.params.id} and username ${req.params.username} and age ${req.params.age}`);
});

// 9. create another route
app.get('/comments/:id/:username/:age/:address', (req, res) => {
    res.send(`This is a comments page with id ${req.params.id} and username ${req.params.username} and age ${req.params.age} and address ${req.params.address}`);
});
