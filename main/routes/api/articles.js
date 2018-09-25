
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Match with "/api/articles"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// Match with "/api/articles/:id"
router.route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;