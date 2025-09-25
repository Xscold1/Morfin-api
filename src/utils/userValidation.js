const joi = require("joi");

const registerSchema = joi.object({
  email: joi.string().email().required(),
  name: joi.string().min(3).max(30).required(),
  password: joi.string().min(6).required(),
  salary: joi.number().positive().required(), 
})

module.exports = {
  registerSchema
}