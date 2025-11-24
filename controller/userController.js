const User = require('../models/userModel')
const getAll = async (req, res) => {
    const data = await User.find();

    res.json(data)
}
const addUser = async (req, res) => {
    //extract the data
    const { nameFromReq, ageFromReq } = req.body
    //use mongoose schema User
    const data = new User({
        name: nameFromReq,
        age: ageFromReq
    })
    // save the data
    const savedUser = await data.save();

    // send data
    res.json(savedUser)
}

const updateUser = async (req, res) => {
    //extract id from params
    let id = req.params.id;
    let { name, age } = req.body;

    // update the data 
    let data = await User.findByIdAndUpdate(
        id,
        { name: name, age: age },
        { new: true }
    )

    // send response to the client
    res.send(data);
}

const updateUserByParts = async (req, res) => {
    //extract id from params

    let updates = {};
    let id = req.params.id;

    if (req.body.name) {
        updates.name = req.body.name;
    }
    if (req.body.age) {
        updates.age = req.body.age;
    }

    // update the data 
    let data = await User.findByIdAndUpdate(
        id,
        updates,
        { new: true }
    )

    // send response to the client
    res.send(data);
}

const deleteUser = async (req, res) => {
    //extract id from params
    let id = req.params.id;

    // delete the data 
    let data = await User.findByIdAndDelete(id)

    // send response to the client
    res.send(data);
}
module.exports = {
    getAll,
    addUser,
    updateUser,
    updateUserByParts,
    deleteUser
}