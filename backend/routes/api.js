const express = require('express');

const router = express.Router();

//Mongoose Schemas:
const User = require("../schema/User");
const Quiz = require("../schema/Quiz");

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

    const user = new User(data);
    
    res.json({
        msg: "[Console]: Login information recieved!"
    });

    user.find({username: this.body.username});

});

router.post('/register', (req, res) => {
    console.log('[Console]: Body-', req.body);
    const data = req.body;

    const newUser = new User(data);
    
    res.json({
        msg: "[Console]: Registration information recieved!"
    });

    newUser.save((error) => {
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