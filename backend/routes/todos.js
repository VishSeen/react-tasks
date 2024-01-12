const express = require('express');
const Users = require('../models/users');
const Todos = require('../models/todos');
const routes = express.Router();

// const user = new Users({
//     name: "Testing",
//     email: "test@gmail.com",
//     todos: {
//         todo: 2
//     },
//     reminders: {
//         reminder: 2
//     },
//     notes: {
//         note: 2
//     }
// })

// user.save()


const todos = new Todos({
    title: 'Feed turtles.',
    description: "Hello World.",
    tag: 'personal',
    isCompleted: false
})

todos.save()

routes.get('/', (req, res) => {
    res.send(todos);
})

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