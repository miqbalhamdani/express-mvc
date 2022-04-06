const { Todo } = require("../models");

// cosnt TodoContoller = {
//   index: function(){  };
//   create: function(){  };
//   post: function(){  };
//   check: function(){  };
//   uncheck: function(){  };
//   delete: function(){ }
// },

module.exports = {
  index: async (_, res) => {
    // Get all todos
    const todos = await Todo.findAll({
      order: [
        ['id', 'ASC'],
      ]
    });

    // Render todos in pages
    res.render("todo/todo-list", { todos });
  },

  // Show page to create todo
  create: async (_, res) => {
    res.render("todo/todo-create");
  },

  // Send data to database
  post: async (req, res) => {
    await Todo.create({ name: req.body.name });
    res.redirect("/todo");
  },

  // Set todo to checked
  check: async (req, res) => {
    await Todo.update(
      { isDone: true },
      {
        where: { id: +req.params.id },
      }
    );

    res.redirect("/todo");
  },

  // Set todo to unchecked
  uncheck: async (req, res) => {
    await Todo.update(
      { isDone: false },
      {
        where: { id: +req.params.id },
      }
    );

    res.redirect("/todo");
  },

  // Delete todo from list
  delete: async (req, res) => {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/todo");
  },
};
