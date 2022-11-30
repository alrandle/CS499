//Handles post/get requests

const express = require('express');

const router = express.Router();

const quiz_sample = require('../schema/quiz-sample');
const users = require('../schema/users');


//Routes
router.get('/', (req,res) =>{// May need to cange path
    quiz_sample.find({  })
        .then((data)) =>{
            console.log('Date: ", data);
            res.json(data);
        })
        .catch(error) => {
            console.log('error: ', dataerror);
        })
})


router.get('/', (req,res) =>{// May need to cange path
    users.find({  })
        .then((data)) =>{
            console.log('Date: ", data);
            res.json(data);
        })
        .catch(error) => {
            console.log('error: ', dataerror);
        })
})

router.post('/save', (req,res) =>{// May need to cange path
    console.log('Body: ', req.body);
    res.json({
        msg: 'Data recived'
    })
})
