const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user', 'editor']
    }

})
console.log("schema")
const User = mongoose.model("User", userSchema);



module.exports = User;