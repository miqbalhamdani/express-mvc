const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// setting session handler
const session = require("express-session");
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

// setting passport
// (sebelum router dan view engine)
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

// setting router
const todo = require("./routers/todos");
const auth = require("./routers/auth");
app.use(todo);
app.use(auth);

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
