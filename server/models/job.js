"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.hasMany(models.Application, { foreignKey: "jobId" });
      Job.hasMany(models.Bookmark, { foreignKey: "jobId" });
      Job.belongsTo(models.Category, { foreignKey: "categoryId" });
      Job.belongsTo(models.Company, { foreignKey: "companyId" });
    }
  }
  Job.init(
    {
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      location: DataTypes.STRING,
      typeOfWork: DataTypes.STRING,
      experienceOfWork: DataTypes.STRING,
      salary: DataTypes.STRING,
      description: DataTypes.TEXT,
      qualification: DataTypes.TEXT,
      deadline: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
