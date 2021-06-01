const Joi = require("joi");

//Validation for adding users
const validProfile = (_userObj) => {
  let schema = Joi.object({
    user: Joi.any(),
    country: Joi.string().min(2).max(50).required(),
    city: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(1).max(100).required(),
    street_number: Joi.string().required(),
    phone: Joi.string(),

    foods: Joi.array(),
    satisfied_users: Joi.array()
  })
  return schema.validate(_userObj);
}
exports.validProfile = validProfile;


const validEditProfile = (_userObj) => {
  let schema = Joi.object({
    user: Joi.any(),
    country: Joi.string().min(2).max(50),
    city: Joi.string().min(2).max(100),
    street: Joi.string().min(1).max(100),
    street_number: Joi.string(),
    phone: Joi.String(),

    foods: Joi.array(),
    satisfied_users: Joi.array()
  })
  return schema.validate(_userObj);
}
exports.validEditProfile = validEditProfile;

