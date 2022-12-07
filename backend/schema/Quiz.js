var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    'id': Number,
    'question': String,
    'options': {Num: String},
    'answer': Number
})

var quizSchema = new mongoose.Schema({
    'creator' : String,
    'creator_id' : String,
    'date': Date,
    'quiz_id': Number,
    'title': String,
    'tags' : [],
    'questions' : {questionSchema}
})

module.exports = mongoose.model('quizs', quizSchema);
