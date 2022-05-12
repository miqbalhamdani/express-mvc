const router = require("express").Router();

const restrictApi = require('../../middlewares/restrictApi')

const auth = require("./authApi");
const todo = require("./todoApi");

router.use(auth);
router.use('/todo', restrictApi, todo);

module.exports = router;
