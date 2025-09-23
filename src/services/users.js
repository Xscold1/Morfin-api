const { User } = require('../models')
const bcrypt = require('bcrypt')

const register = async (params) => {
  const {email, name, password, salary} = params

  const existingUser = await findByEmail(email)
  if(existingUser) {
    const error = new Error('Email already in use')
    error.isHandled = true
    error.code = 400
    throw error
  }

  const hashedPassword = await bcrypt.hash(password, 10)
 
  const payload = {
    email,
    password: hashedPassword,
    name,
    salary: parseFloat(salary)
  }

  return await User.create(payload)
}

const findByEmail = async (email) => {
  return User.findOne({where: {email}})
}

const find = async (id) => {
  return User.findByPk(id)
}

module.exports = {
  register
}