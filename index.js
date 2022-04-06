const express = require("express");
const app = express();
const { Todo } = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/todos", async (_, res) => {
  // Get all todos
  const todos = await Todo.findAll();

  // const todos = await Todo.findAll({
  //   order: [
  //     ['id', 'ASC'],
  //   ]
  // });

  // Render todos in pages
  res.render("todo/todo-list", { todos });
});

// Show page to create todo
app.get("/todo/create", async (_, res) => {
  res.render("todo/todo-create");
});

// Send data to database
app.post("/todo/post", async (req, res) => {
  await Todo.create({ name: req.body.name });
  res.redirect("/todos");
});

// Set todo to checked
app.get("/todo/check/:id", async (req, res) => {
  await Todo.update(
    { isDone: true },
    {
      where: { id: +req.params.id },
    }
  );

  res.redirect("/todos");
});

// Set todo to unchecked
app.get("/todo/uncheck/:id", async (req, res) => {
  await Todo.update(
    { isDone: false },
    {
      where: { id: +req.params.id },
    }
  );

  res.redirect("/todos");
});

// Delete todo from list
app.get("/todo/delete/:id", async (req, res) => {
  await Todo.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/todos");
});

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
