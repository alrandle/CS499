const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    'name': {
        'firstname' : String,
        'lastname' : String,
        'username': String
    },
    'stu-email': String,
    'password': String,
    'date-created': Date,
    'last-login': Date
})

mongoose.model('quiz-sample', userSchema);