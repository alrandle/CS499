const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
    const data = {
        username: 'justin30g',
        age: 22
    };
    res.json(data);
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
