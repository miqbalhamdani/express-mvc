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
  index: async (req, res) => {
    const { name, id } = req.user.dataValues;

    // Get all todos
    const todos = await Todo.findAll({
      where: {
        UserId: id,
      },
      order: [
        ['id', 'ASC'],
      ]
    });

    // Render todos in pages
    res.render("todo/todo-list", {
      todos,
      name,
    });
  },

  // Show page to create todo
  create: async (req, res) => {
    res.render("todo/todo-create", {
      name: req.user.dataValues.name,
    });
  },

  // Send data to database
  post: async (req, res) => {
    try {
      await Todo.create(
        {
          name: req.body.name,
          isDone: false,
          UserId: req.user.dataValues.id
        }
      );
      res.redirect("/todo");
    } catch (error) {
      console.log(error);
    }
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
