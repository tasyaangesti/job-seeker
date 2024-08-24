'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job, {foreignKey: "companyId"})
    }
  }
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    industry: DataTypes.STRING,
    description: DataTypes.TEXT,
    company_scale: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};