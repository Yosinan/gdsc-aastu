const express = require('express')
 const app = express()

app.get('/ping', (req,res) => {
res.send("pong")}
)
//app.use(express.static('public'))


//app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/',   (req, res) => {
//const name = req.params.name
const name = new Date().toLocaleString()
        res.render('index', { date: name})})
const port = 5000



app.listen(port, () => console.log(`app listening at port ${port}`))


app.get('/products', (req, res) => {
        res.json({
                id:87,
                name:"iphone",}
        )}
)





const express = require('express')
const app = express()
const port = process.argv[2]
const path = process.argv[3]

app.set('view engine', 'pug')

app.get('/home', (req, res) => {
        res.render('index', {date: new Date().toDateString()})
}

app.listen(port, () => console.log(`app listening at port ${port}`))