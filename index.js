require('dotenv').config()

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router for api
const api = require("./routers/api");
app.use('/api/v1', api);

// initialize passport for api
const passportApi = require('./lib/passportApi');
app.use(passportApi.initialize());


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

// Tambahkan kode middleware ini setelah bagian controller
const restrict = require('./middlewares/restrict')

app.use('/todo', restrict, todo);
app.use(auth);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Your apps running in http://localhost:${port} ...`);
});
