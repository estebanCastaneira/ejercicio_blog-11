const express = require("express");
const router = express.Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const isAtLeastWriter = require("../middleware/isAtLeastWriter");
const isAtLeastEditor = require("../middleware/isAtLeastEditor");
const isAdmin = require("../middleware/isAdmin");

const pagesController = require("../controllers/pagesController");




router.get("/", ensureAuthenticated, isAtLeastWriter, isAtLeastEditor, isAdmin,  pagesController.showPanel);

module.exports = router;
