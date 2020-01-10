const mongoose = require('mongoose')

const Schema = mongoose.Schema


// Document
const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String

})

// Collection
const Transections = mongoose.model('transaction', transactionSchema)
module.exports = Transections


