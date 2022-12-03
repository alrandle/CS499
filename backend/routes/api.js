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
            console.log('[Console]: Error! ', daerrorta);
        });
});

router.get('/quiz', (req, res) => {
    Quiz.find({})
        .then((data) =>{
            console.log('[Console]: Data - ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('[Console]: Error! ', daerrorta);
        });
});


router.post('/login', (req, res) => {
    console.log('[Console]: Body-', req.body);
    res.json({
        msg: "We have recieved your data!!!!"
    });
});

module.exports = router;