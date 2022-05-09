'use strict';
const {
  Model
} = require('sequelize');

const { dateFormat } = require('../helpers');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    formatedDate() {
      return dateFormat(this.createdAt);
    }
  }

  Todo.init({
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
