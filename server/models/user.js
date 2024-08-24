"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Application, { foreignKey: "userId" });
      User.hasMany(models.Bookmark, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { args: true, msg: "Email already exists" },
        validate: {
          notEmpty: { msg: "Email is Required" },
          notNull: { msg: "Email is Required" },
          isEmail: { args: true, msg: "Input must be a valid Email Format" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is Required" },
          notNull: { msg: "Password is Required" },
          len: { args: [8], msg: "Password must be at least 8 characters " },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
        validate: {
          isIn: {
            args: [["user", "admin"]],
            msg: "Role must be either 'user' or 'admin'",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user, option) => {
    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;
  });

  return User;
};
