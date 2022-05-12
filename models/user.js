"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Method untuk melakukan enkripsi
    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    // Lalu, kita buat method register
    static register = ({ email, name, password }) => {
      const encryptedPassword = this.#encrypt(password);
      /*
      #encrypt dari static method
      encryptedPassword akan sama dengan string
      hasil enkripsi password dari method #encrypt
    */
      return this.create({ email, name, password: encryptedPassword });
    };

    /* Method .compareSync digunakan untuk mencocokkan plaintext dengan hash. */
    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    /* Method Authenticate, untuk login */
    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) return Promise.reject("User not found!");

        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) return Promise.reject("Wrong password");

        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };

    // Generate Token for API
    generateToken = () => {
      // Jangan memasukkan password ke dalam payload
      const payload = {
        id: this.id,
        username: this.email
      }

      // Rahasia ini nantinya kita pakai untuk memverifikasi apakah token ini benar-benar berasal dari aplikasi kita
      const rahasia = process.env.JWT_SECRET;

      // Membuat token dari data-data diatas
      const token = jwt.sign(payload, rahasia)
      return token
    };
  }

  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
