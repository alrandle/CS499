const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    'id': Number,
    'question': String,
    'options': {Num: String},
    'answer': Number
})

const quizSchema = new mongoose.Schema({
    'quiz_id': Number,
    'title': String,
    'tags' : [],
    'questions' : {questionSchema},
    'date': Date

})

module.exports = mongoose.model('quiz', quizSchema);
