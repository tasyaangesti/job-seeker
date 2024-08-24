const express = require("express");
const UserController = require("../controllers/userController");
const user = express.Router();

user.post("/register", UserController.register);
user.post("/login", UserController.login);

module.exports = user;
