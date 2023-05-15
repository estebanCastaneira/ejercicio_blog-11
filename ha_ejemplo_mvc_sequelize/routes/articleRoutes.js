const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");



// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear",ensureAuthenticated, articleController.create);
router.post("/", articleController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar",ensureAuthenticated, articleController.edit);
router.post("/:id",ensureAuthenticated, articleController.newComment);

router.patch("/:id", articleController.update);
router.delete("/:id", articleController.destroy);

module.exports = router;
