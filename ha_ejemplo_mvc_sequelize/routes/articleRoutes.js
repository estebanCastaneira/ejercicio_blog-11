const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const isAtLeastWriter = require("../middleware/isAtLeastWriter");
const isAtLeastEditor = require("../middleware/isAtLeastEditor");
const isAdmin = require("../middleware/isAdmin");



// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear",ensureAuthenticated, isAtLeastWriter, articleController.create);
router.post("/", isAtLeastWriter, articleController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar",ensureAuthenticated, isAtLeastWriter, isAtLeastEditor, articleController.edit);
router.post("/:id",ensureAuthenticated, articleController.newComment);

router.patch("/:id", articleController.update);
router.delete("/:id", isAtLeastEditor, articleController.destroy);

module.exports = router;
