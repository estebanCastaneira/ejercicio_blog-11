const express = require("express");
const router = express.Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const isAtLeastWriter = require("../middleware/isAtLeastWriter");

const pagesController = require("../controllers/pagesController");



router.get("/", ensureAuthenticated, isAtLeastWriter, pagesController.showPanel);

module.exports = router;
