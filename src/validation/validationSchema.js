const Joi = require("joi");

const customerSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  address: Joi.string(),
  phone: Joi.string().pattern(new RegExp("^[0-9]{8,11}$")),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  description: Joi.string(),
});

module.exports = { customerSchema };
