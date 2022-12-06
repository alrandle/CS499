var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    'id': Number,
    'question': String,
    'options': {Num: String},
    'answer': Number
})

var quizSchema = new mongoose.Schema({
    'quiz_id': Number,
    'title': String,
    'tags' : [],
    'questions' : {questionSchema},
    'date': Date

})

module.exports = mongoose.model('quiz', quizSchema);
