const express = require("express");
const JobController = require("../controllers/jobController");
const authentication = require("../middlewares/authentication");
const upload = require("../middlewares/multer");
const job = express.Router();

job.get("/getAllJobs", JobController.getAllJob);
job.get("/getAllCompany", JobController.getCompany);
job.get("/getAllCategory", JobController.getCategory);
job.get("/getDetailJob/:id", JobController.getJobById);
job.get("/getDetailCompany/:id", JobController.getCompanyById);
job.get("/getDetailCategory/:id", JobController.getCategoryById);
job.post("/jobs/:jobId/bookmark", authentication, JobController.addBookmark);
job.delete(
  "/jobs/:jobId/bookmark",
  authentication,
  JobController.removeBookmark
);
job.post(
  "/jobs/:jobId/apply",
  authentication,
  upload.single("resume"),
  JobController.addApplication
);

module.exports = job;
