const joi = require("joi");

const fixedExpense = joi.object({
  user_id: joi.number().required(),
  is_regular: joi.boolean().default(false),
  billing_day: joi.number().min(1).max(31).required(),
  type: joi.number().required(),
  name: joi.string().required(), 
  amount: joi.number().default(0), 
  date_from: joi.date(),
  date_to: joi.date()
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