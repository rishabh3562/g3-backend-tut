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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hassedPassword = await bcrypt.hash(this.password, salt);
    this.password = hassedPassword;
    next();

})
console.log("schema")
const User = mongoose.model("User", userSchema);



module.exports = User;