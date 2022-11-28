const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    'name': {
        'firstname' : String,
        'lastname' : String,
        'username': String
    },
    'stu-email': String,
    'password': String,
    'role' : String
})

module.exports = mongoose.model('users', userSchema);

