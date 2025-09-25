const {resSuccess, resError} = require('../utils/response')
const {success, error} = require('../constants/response')
const code = require('../constants/code')
const userService = require('../services/users')

const register = async (req, res) => {
  try {

    console.log(req.body)

    await userService.register(req.body)

    return resSuccess(res, success.REGISTER.statusCode, success.REGISTER.message)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}

module.exports = {
  register
}