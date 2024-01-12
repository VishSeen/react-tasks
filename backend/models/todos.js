const mongoose = require('mongoose');


const todosSchema = new mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('Todos', todosSchema);