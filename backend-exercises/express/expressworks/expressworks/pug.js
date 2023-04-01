const path = require('path')
const express = require('express')
const app = express()
const port = process.argv[2]
//const path = process.argv[3]

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/home', (req, res) => {
        res.render('index', {date: new Date().toDateString()})
})

app.listen(port, () => console.log(`app listening at port ${port}`))