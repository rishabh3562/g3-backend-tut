const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const connectDB = require('./config/database')
const userRouter = require('./routes/userRouter')
const authRouter = require("./routes/authRouter")
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use("/", userRouter);
app.use("/", authRouter);

app.listen(8000, () => {
    connectDB();
    console.log("server started")
})