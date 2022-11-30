const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UsersSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  password: String,
  rol: {
    type: Boolean,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("user", UsersSchema);

const ValidateUser = (user) => {
  const schema = Joi.object({
    nombre: Joi.string().min(5).max(100).required(),
    apellido: Joi.string().min(5).max(100).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

module.exports = {
  User,
  ValidateUser,
};
