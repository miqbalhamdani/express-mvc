const router = require("express").Router();

const todo = require("../../controllers/api/TodoApiController");

router.get("/", todo.findAll);
router.get("/:userId", todo.findByUserId);

module.exports = router;
