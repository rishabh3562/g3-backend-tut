const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.pre('save', function (next) {

})
console.log("schema")
const User = mongoose.model("User", userSchema);



module.exports = User;