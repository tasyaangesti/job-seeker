const { User } = require("../models");

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
}

module.exports = UserController;
