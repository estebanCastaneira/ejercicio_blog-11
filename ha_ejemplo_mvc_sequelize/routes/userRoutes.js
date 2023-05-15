const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const isAdmin = require("../middleware/isAdmin");
// Rutas relacionadas a los usuarios:
// ...

router.get("/", ensureAuthenticated, isAdmin, userController.index);
router.get("/registro", userController.create);
router.post("/registro", userController.store);
router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);


module.exports = router;
