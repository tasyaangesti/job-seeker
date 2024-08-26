const express = require("express");
const JobController = require("../controllers/jobController");
const job = express.Router();

job.get("/getAllJobs", JobController.getAllJob);
job.get("/getAllCompany", JobController.getCompany);
job.get("/getAllCategory", JobController.getCategory);
job.get("/getDetailJob/:id", JobController.getJobById);
job.get("/getDetailCompany/:id", JobController.getCompanyById);
job.get("/getDetailCategory/:id", JobController.getCategoryById);


module.exports = job;
