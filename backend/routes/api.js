const express = require('express');

const router = express.Router();

//Mongoose Schemas:
const mongoose = require('mongoose');
const User = require("../schema/User");
const Quiz = require("../schema/Quiz");

//SALT & HASH Plugin
const bcrypt = require('bcryptjs');

//Routes
router.get('/user', (req, res) => {
    User.find({})
        .then((data) =>{
            console.log('[Console]: Data - ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('[Console]: Error! ', error);
        });
});

router.get('/quiz', (req, res) => {
    Quiz.find({})
        .then((data) =>{
            console.log('[Console]: Data - ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('[Console]: Error! ', error);
        });
});


router.post('/login', (req, res) => {
    console.log('[Console]: Body-', req.body);
    data = req.body;

    console.log(`Username: ${data.username}`);

    User.findOne({username: `${data.username}`}, function (err, docs){
        if(err){
            console.log(err);
        }else{
            console.log("First Function Call : ", docs)
        }
    });

    console.log(`[Console]: Login information recieved! - ${data}`);

    headers:{
        Cookie: `UID=${data.username}; PASS=${data.password.hash};`
        console.log("Cookie Set!");
    }
});


router.post('/register', (req, res) => {
    console.log('[Console]: Body-', req.body);
    data = req.body;

    userVariable = new User(data);
    
    userVariable.save((error) => {
        if (error){
            res.json({
                msg: "[Console]: Error handling. Please try again later."
            });
        }else{
            res.json({
                msg: "[Console]: Registration information recieved!"
            });
        }
    })
});

module.exports = router;