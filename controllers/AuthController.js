const { User } = require("../models");
const passport = require("../lib/passport");

module.exports = {
  register: (req, res) => {
    res.render("register", { layout: 'layouts/auth' });
  },

  registerPost: async (req, res, next) => {
    // Kita panggil static method register yang sudah kita buat tadi
    await User.register({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });

    res.redirect("/login");
  },

  login: (req, res) => {
    res.render("login", { layout: 'layouts/auth' });
  },

  // Kalau mau tulis di file controllers/authController.js
  // Letakkan kode ini setelah bagian register
  loginPost: passport.authenticate("local", {
    successRedirect: "/todo",
    failureRedirect: "/login",
  }),
};
