//mongoose
/*
const mongoose = require('mongoose');
const User = require('./schema/User.js');
mongoose.connect("mongodb://localhost/quiz:27017");

async function run(){
    try{
        const user = await User.create({
            name: {
                'firstname': 'Daniel',
                'lastname': 'Kasnick',
                'username': 'cs49910'}, 
            'stu-email' : "dkasnick@sycamores.indstate.edu",
            password: "test",

        })
        user.save()
        console.log(user)
    }catch(e){
        console.log(e.message);
    }
}

*/