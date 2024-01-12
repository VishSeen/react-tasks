const express = require('express');
const mongoose = require('mongoose')
const connect = require('./db/connec')
const todos = require('./routes/todos')

require('dotenv').config();

const app = express();
const URI = process.env.CONNECTION
const PORT = process.env.PORT || 4000;

connect(URI)

app.use('/', todos);

app.listen(PORT);