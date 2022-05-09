require('dotenv').config()

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// setting session handler
const session = require("express-session");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// setting passport
// (sebelum router dan view engine)
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

// setting flash
const flash = require("express-flash");
app.use(flash());

// setting router
const todo = require("./routers/todos");
const auth = require("./routers/auth");
app.use(todo);
app.use(auth);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Your apps running in http://localhost:${port} ...`);
});
