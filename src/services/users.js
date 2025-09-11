const {User} = require('../models')

const register = async (params) => {
  const {email, name, password} = params

  const payload = {
    email,
    password,
    name,
  }

  const result = await User.create(payload)
  return result
}

module.exports = {
  register
}