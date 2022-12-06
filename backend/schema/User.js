var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    'username': String,
	'password': {
		hash: String,
		salt: String
	},
    name:{
		firstname: String,
		lastname: String,
	},
    'email': String,
    'role': String,
    'lastlogin' : String
})

module.exports = mongoose.model('users', userSchema);
