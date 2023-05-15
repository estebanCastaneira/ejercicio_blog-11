const express = require("express");
const router = express.Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");


const pagesController = require("../controllers/pagesController");




router.get("/", ensureAuthenticated, pagesController.showPanel);

module.exports = router;
