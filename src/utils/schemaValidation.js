const joi = require("joi").extend(require('@joi/date'));

const fixedExpense = joi.object({
  user_id: joi.number().required(),
  is_regular: joi.boolean().default(false),
  billing: joi.number().min(1).max(31).required(),
  type: joi.number().required().min(0).max(3),
  name: joi.string().required(),
  amount: joi.number().default(0).min(0).required(), 
  date_from: joi.date().format('YYYY-MM-DD'),
  date_to: joi.date().format('YYYY-MM-DD'),
})

const registerSchema = joi.object({
  email: joi.string().email().required(),
  name: joi.string().min(3).max(30).required(),
  password: joi.string().min(6).required(),
  salary: joi.number().positive().required(), 
})

module.exports = {
  registerSchema,
  fixedExpense
}