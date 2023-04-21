const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('working')
})
app.listen(3000, () => {
    console.log('Server is listening at port 3000')
})