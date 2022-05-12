const router = require("express").Router();

const todo = require("./../controllers/TodoController");

// cosnt TodoContoller = {
//   index: function(){  };
//   create: function(){  };
//   post: function(){  };
//   check: function(){  };
//   uncheck: function(){  };
//   delete: function(){ }
// },

// TodoController.index

router.get("/", todo.index);
router.get("/create", todo.create);
router.post("/post", todo.post);
router.get("/check/:id", todo.check);
router.get("/uncheck/:id", todo.uncheck);
router.get("/delete/:id", todo.delete);

module.exports = router;
