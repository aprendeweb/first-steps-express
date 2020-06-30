const Joi = require('@hapi/joi');
module.exports = {
  createPoepleSchema: Joi.object({
    code: Joi.number().required(),
    name: Joi.string().required(),
    age: Joi.number().required(),
  }),
  updatePeopleSchema: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  }),
};
