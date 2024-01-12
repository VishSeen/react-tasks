const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    todos: Object,
    reminders: Object,
    notes: Object
});

module.exports = mongoose.model('Users', userSchema)