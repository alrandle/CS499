//Daniel was here :P
const express = require('express');

const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = "mongodb://127.0.0.1:27017/quiz";

const routes = require('./routes/api.js');

//[Mongoose]: 
mongoose.connect(MONGODB_URL, () => {
        console.log("[Console]: Mongoose connected to MongoDB")
    },
    e => console.error(e)
);

//[Cors]:
app.use(cors());
//[Express]: 
//Json Parser
app.use(express.json());
//URL Encoder
app.use(express.urlencoded({extended: false}));

//[Morgan]: HTTP Request Tracker 
app.use(morgan('tiny'));

//[Router]: API router
app.use('/api', routes);

app.listen(PORT, console.log(`[Console]: Server started on port: ${PORT}`));



/*
run()
async function run(){
    const user = new User({
        username: "cs49910",
        password: {
            hash: "a85e5c2124bedb412c187e89999294289bdcbef148321994c056d74c24b43060",
            salt: "dBlH!OM$4!YD"
        },
        name: {
            firstname: "Daniel",
            lastname: "Kasnick"
        },
        email: "dkasnick@sycamores.indstate.edu",
        role: "admin",
        lastlogin: new Date()
    })
    await user.save()
    console.log(user)

    const user2 = new User({
        username: "cs49907",
        password: "777",
        name: {
            firstname: "Justin",
            lastname: "Guieb"
        },
        email: "jguieb@sycamores.indstate.edu",
        role: "admin",
        lastlogin: new Date()
    })
    await user.save()
    console.log(user2)
}

app.use('/', routes)
*/