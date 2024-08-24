"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Application.belongsTo(models.User, { foreignKey: "userId" });
      Application.belongsTo(models.Job, { foreignKey: "jobId" });

    }
  }
  Application.init(
    {
      cover_letter: DataTypes.TEXT,
      resume: DataTypes.TEXT,
      status: DataTypes.STRING,
      jobId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Application",
    }
  );
  return Application;
};
