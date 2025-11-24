
const express = require('express');
const userRouter = express.Router();
const { getAll, addUser, updateUser, updateUserByParts, deleteUser } = require("../controller/userController")

userRouter.route("/users").get(getAll).post(addUser);
// userRouter.get("/users", getAll)
// userRouter.post("/users", addUser)
userRouter.route("/users/:id").put(updateUser).patch(updateUserByParts).delete(deleteUser)
// userRouter.put("/users/:id", updaetUser)
// userRouter.patch("/users/:id", updaetUserByParts)
// userRouter.delete("/users/:id", deleteUser)


module.exports = userRouter;