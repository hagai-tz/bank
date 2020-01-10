//server setup
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./routes/api')
// const path = require('path')

//require folders
// app.use(express.static(path.join(__dirname, "../node_modules")))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


//middlewhere
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

// DB setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bankDB', { useNewUrlParser: true })



//listen port
const port = 2000
app.listen(port, function () {
    console.log("The server is up and running on port " + port)
})
