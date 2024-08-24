const { where } = require("sequelize");
const { User } = require("../models");
const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");

class UserController {
  static async register(req, res) {
    try {
      const { fullName, phoneNumber, email, password } = req.body;
      const newUser = await User.create({
        fullName,
        phoneNumber,
        email,
        password,
        role: "user",
      });

      res.status(201).json({
        id: newUser.id,
        role: newUser.role,
        email: newUser.email,
      });
    } catch (error) {
      console.log(error);
      if (
        error.name === "SequelizeUniqueConstraintError" ||
        error.name === "SequelizeValidationError"
      ) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "internal server error" });
      }
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { code: 400, message: "Email is Required" };
      }

      if (!password) {
        throw { code: 400, message: "Password is Required" };
      }

      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { code: 401, message: "Invalid Email or Password" };
      }

      const isPasswordSame = comparePassword(password, findUser.password);
      if (!isPasswordSame) {
        throw { code: 401, message: "Invalid Email or Password" };
      }

      const access_token = signToken({ id: findUser.id });

      res
        .status(200)
        .json({ access_token, email: findUser.email, role: findUser.role });
    } catch (error) {
      console.log(error);
      if (
        error.name === "SequelizeUniqueConstraintError" ||
        error.name === "SequelizeValidationError"
      ) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "internal server error" });
      }
    }
  }
}

module.exports = UserController;
