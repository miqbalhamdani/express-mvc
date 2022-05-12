const { Todo } = require("../../models");

const findAll = async (_, res) => {
  try {
    // Get all todos
    const todos = await Todo.findAll();

    // Render todos in pages
    res.status(200).json(todos);
  } catch(error) {
    console.log('error fetch todo data');
  }
};

const findByUserId = async (req, res) => {
  try {
    const UserId = req.params.userId;

    const todos = await Todo.findAll({
      where: { UserId, },
    });

    // Render todos in pages
    res.status(200).json(todos);
  } catch(error) {
    console.log('error fetch todo data by user id');
  }
};

module.exports = {
  findAll,
  findByUserId,
};
