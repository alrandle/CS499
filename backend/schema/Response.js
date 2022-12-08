const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    'id': Number,
    'question': String,
    'options': {Num: String},
    'answer': Number
})

const userSchema = new mongoose.Schema({
    'quiz_id': Number,
    'title': String,
    'tags' : [],
    'questions' : {questionSchema},
    'date': Date, 
    'letter-grade' : String,
    'percentage-grade' : Number
})

mongoose.model('quizs_responses', userSchema);