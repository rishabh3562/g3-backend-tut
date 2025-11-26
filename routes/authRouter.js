const express = require('express');
const { registerHandler, loginHandler, getme, logoutHandler } = require('../controller/authController');

const authRouter = express.Router();

authRouter.route("/login").post(loginHandler);
authRouter.route("/register").post(registerHandler);
authRouter.route("/getme").get(getme);

authRouter.route("/logout").post(logoutHandler);

module.exports = authRouter;