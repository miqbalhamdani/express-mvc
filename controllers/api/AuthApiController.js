// controllers/authController.js
const { User } = require('../../models')

const login = async (req, res) => {
  try {
    const user = await User.authenticate({
      email: req.body.email,
      password: req.body.password,
    });

    const formatedUser = {
      email: user.email,
      name: user.name,
      accessToken: user.generateToken()
    }

    res.json(formatedUser);
  } catch(error) {
    console.log(error);
  }
};


module.exports = {
  login,
};
