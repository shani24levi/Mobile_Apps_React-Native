const Joi = require("joi");

const validFood = (_userObj) => {
  let schema = Joi.object({
    id: Joi.any(),
    user: Joi.any(),
    type: Joi.string().min(2).max(50).required(),
    title: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(1).max(100),
    avilibal:  Joi.boolean(),
    amount: Joi.number(),
    img:Joi.string().required(),
  })
  return schema.validate(_userObj);
}
exports.validFood = validFood;
