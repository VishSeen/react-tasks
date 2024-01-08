const express = require('express');
const todos = require('./routes/todos')

const app = express();
const PORT = 4000;



app.use('/', todos);

app.listen(PORT);