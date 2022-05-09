const router = require("express").Router();

const todo = require("./../controllers/TodoController");

// Tambahkan kode middleware ini setelah bagian controller
const restrict = require('../middlewares/restrict')

// cosnt TodoContoller = {
//   index: function(){  };
//   create: function(){  };
//   post: function(){  };
//   check: function(){  };
//   uncheck: function(){  };
//   delete: function(){ }
// },

// TodoController.index

router.get("/todo/", restrict, todo.index);
router.get("/todo/create", restrict, todo.create);
router.post("/todo/post", restrict, todo.post);
router.get("/todo/check/:id", restrict, todo.check);
router.get("/todo/uncheck/:id", restrict, todo.uncheck);
router.get("/todo/delete/:id", restrict, todo.delete);

module.exports = router;
