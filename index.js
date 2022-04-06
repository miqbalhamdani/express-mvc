const express = require("express");
const app = express();
const todo = require("./routers/todos");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(todo);

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
