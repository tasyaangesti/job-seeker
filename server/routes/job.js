const express = require("express");
const JobController = require("../controllers/jobController");
const job = express.Router();

job.get("/getAllJobs", JobController.getAllJob);
job.get("/getAllCompany", JobController.getCompany);
job.get("/getAllCategory", JobController.getCategory);


module.exports = job;
