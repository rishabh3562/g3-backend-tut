const mongoose = require('mongoose')
function connectDB(params) {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connect")
    }).catch((err) => {
        console.log("error", err)
    })
}

module.exports = connectDB;