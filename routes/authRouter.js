const express = require('express');
const { registerHandler } = require('../controller/authController');

const authRouter = express.Router();

// authRouter.route("/login").post();
authRouter.route("/register").post(registerHandler);
// authRouter.route("/getme").get();

// authRouter.route("/logout").post();

module.exports = authRouter;