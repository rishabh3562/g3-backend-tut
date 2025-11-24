const mongoose = require('mongoose')
function connectDB(params) {
    mongoose.connect("mongodb://127.0.0.1:27017/blogs3").then(() => {
        console.log("connect")
    }).catch((err) => {
        console.log("error", err)
    })
}

module.exports = connectDB;