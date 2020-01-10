//server setup
const express = require ('express')
const router = express.Router()
const request = require ('request')
const mongoose = require('mongoose')
const Transactions = require ('../model/transactionSchema.js')
// const aggregate = mongoose.aggregate

// const Weather = mongoose.model('weather', weatherSchema)

router.get('/breakdwon', async function(req, res){
   let data = await Transactions.group({vendor:'car'})
//    let data = await Transactions.find({}).sort({vendor: 1})
   console.log(data)
   res.send(data)

})

router.get('/transactions', async function (req, res) {
    console.log("I'm get")
    let newTransactions = await Transactions.find({})
    console.log(newTransactions)
    res.send(newTransactions)

})

router.post('/transactions', async function (req, res) {
    console.log("I'm post")
    let newTransactions = req.body
    console.log("I'm body", newTransactions)
    newTransactions = new Transactions ({

        amount: newTransactions.amount,
        category: newTransactions.category,
        vendor: newTransactions.vendor
    })

    await newTransactions.save()
    res.send(newTransactions)

    // request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`, function (err, response) {
    //     const weatherData = response.body
    //     res.send(weatherData)
    // })
})

router.delete('/transactions', async function (req, res) {
    const id = req.query.id
    console.log("I'm delete id", id)
    let test = await Transactions.find({_id: id})
    console.log("I'm _Id", test)
    Transactions.deleteOne({_id: id}, function(err){
        if(err) {console.log(err)}
    })
    res.end()
})


module.exports = router