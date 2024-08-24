const express = require("express");
const UserController = require("../controllers/userController");
const user = express.Router();

user.get("/login", UserController.login);

module.exports = user;
