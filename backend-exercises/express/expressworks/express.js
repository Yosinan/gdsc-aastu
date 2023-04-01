const process = require('process')
const express = require('express')

const app = express()
const port = process.argv[2]
app.get('/home', (req, res) => {
        res.send("Hello World!")
})
app.listen(port, () => console.log(`app listening at port ${port}`))
