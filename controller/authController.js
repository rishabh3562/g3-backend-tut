const { generateToken } = require('../middleware/auth');
const User = require('../models/userModel')
const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    // check missing fields
    if (!email || !password) {
        return res.json({
            success: false,
            message: "missing fields"
        })
    }
    // check if user exists or not
    let user = await User.findOne({ email });
    if (!user) {
        return res.json({
            success: false,
            message: "user does not exist"
        })
    }

    //compare passwords 
    let isMatch = await user.comparePasswords(password);

    if (!isMatch) {
        return res.json({
            success: false,
            message: "invalid credentials"
        })
    }

    //jwt issue
    let payload = {
        _id: user._id,
        role: user.role
    };
    let token = generateToken(payload);
    // send response
    res.json({
        success: true,
        message: "",
        data: {
            _id: user._id,
            name: user.name,
            age: user.age,
            role: user.role,
            email: user.email
        },
        token
    })
}
const registerHandler = async (req, res) => {
    try {
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
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        })
    }
}
const getme = (req, res) => {

}

const logoutHandler = (req, res) => {

}
module.exports = { loginHandler, registerHandler, getme, logoutHandler }