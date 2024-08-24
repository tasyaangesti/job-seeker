const express = require("express");
const user = require("./user");
const job = require("./job");
const router = express.Router();

router.use(user);
router.use(job);

module.exports = router;
