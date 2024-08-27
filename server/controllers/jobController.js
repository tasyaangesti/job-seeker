const { where } = require("sequelize");
const { Job, Company, Category, Bookmark } = require("../models");

class JobController {
  static async getAllJob(req, res) {
    try {
      const jobs = await Job.findAll();

      res.status(200).json(jobs);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async getJobById(req, res) {
    try {
      const { id } = req.params;
      // console.log(id, ">> id job");

      const detailJob = await Job.findByPk(id);
      // console.log(detailJob, ">> detail job");

      if (!detailJob) {
        throw { code: 404, message: "Data not found" };
      }

      res.status(200).json(detailJob);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async getCompany(req, res) {
    try {
      const companies = await Company.findAll();

      res.status(200).json(companies);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async getCompanyById(req, res) {
    try {
      const { id } = req.params;
      // console.log(id, ">> id company");

      const detailCompany = await Company.findByPk(id);
      // console.log(detailCompany, ">> company");

      if (!detailCompany) {
        throw { code: 404, message: "Data not found" };
      }
      res.status(200).json(detailCompany);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async getCategory(req, res) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const getDetailCategory = await Category.findByPk(id);
      if (!getDetailCategory) {
        throw { code: 404, message: "Data not found" };
      }

      res.status(200).json(getDetailCategory);
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async addBookmark(req, res) {
    try {
      const { jobId } = req.params;
      // console.log(jobId, ">> jobId");
      const userId = req.user.id;
      // console.log(userId, ">> userId");

      const existingBookmark = await Bookmark.findOne({
        where: { userId, jobId },
      });

      if (existingBookmark) {
        throw { code: 404, message: "Job is already bookmarked" };
      }

      const newBookmark = await Bookmark.create({ userId, jobId });

      res
        .status(201)
        .json({ message: "Job bookmarked successfully", newBookmark });
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async removeBookmark(req, res) {
    try {
      const { jobId } = req.params;
      console.log(jobId, ">> jobId");
      const userId = req.user.id;
      console.log(userId, ">> userId");

      const bookmark = await Bookmark.findOne({
        where: { userId, jobId },
      });

      if (!bookmark) {
        throw { code: 404, message: "Bookmark not found" };
      }

      await bookmark.destroy();
      res.status(200).json({ message: "Bookmark removed successfully" });
    } catch (error) {
      console.log(error);
      if (error.hasOwnProperty("code")) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}

module.exports = JobController;
