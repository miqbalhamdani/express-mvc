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

router.get("/todos/", todo.index);
router.get("/todo/create", todo.create);
router.post("/todo/post", todo.post);
router.get("/todo/check/:id", todo.check);
router.get("/todo/uncheck/:id", todo.uncheck);
router.get("/todo/delete/:id", todo.delete);

module.exports = router;
