const express = require('express');
const routes = express.Router();

routes.get('/all', (req, res) => {
    res.send("All todos");
});

routes.get('/completed', (req, res) => {
    res.send('Completed');
});

routes.get('/in-progress', (req, res) => {
    res.send('In Progress');
});

module.exports = routes;