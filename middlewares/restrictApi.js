// middlewares/restrict.js
const passport = require("../lib/passportApi");

module.exports = passport.authenticate("jwt", {
  session: false,
});
