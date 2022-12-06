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
