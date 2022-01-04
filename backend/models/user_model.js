const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    name: String,
    email: String,
    password: String
},{timestamps: true})

const user_model = mongoose.model("User", user_schema)

module.exports = user_model