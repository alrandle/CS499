const express = require('express');

const router = express.Router();

//Mongoose Schemas:
const User = require("../schema/User");

//Routes
router.get('/api/user', (req, res) => {
    User.find({})
        .then((data) =>{
            console.log('[Console]: Data - ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('[Console]: Error! ', daerrorta);
        });
});

router.post('/api/save', (req, res) => {
    console.log('[Console]: Body-', req.body);
    res.json({
        msg: "We have recieved your data!!!!"
    });
});

module.exports = router;