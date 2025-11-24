const User = require('../models/userModel')
const loginHandler = (req, res) => {

}
const registerHandler = async (req, res) => {
    const { name, age, email, password, role } = req.body;

    const data = new User({
        name: name,
        age: age,
        email: email,
        password: password, 
        role: role
    })

    const savedUser = await data.save();
    res.json({
        success: true,
        data: savedUser
    })
}
const getme = (req, res) => {

}

const logoutHandler = (req, res) => {

}
module.exports = { loginHandler, registerHandler, getme, logoutHandler }