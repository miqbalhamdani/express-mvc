const router = require("express").Router();

const todo = require("./todoApi");

router.use('/todo', todo);

module.exports = router;
