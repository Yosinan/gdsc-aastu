const process = require('process')
const express = require('express')
const app = express()
const port = process.argv[2]
const path = process.argv[3]

app.use(express.static(path || path.join(__dirname, 'public')))

app.listen(port, () => console.log(`app is listening at port ${port}`))