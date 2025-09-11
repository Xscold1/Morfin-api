const {resSuccess, resError} = require('../utils/response')

const userService = require('../services/users')

const register = async (req, res) => {
  try {
    const result = await userService.register(req.body)

    return resSuccess(res, 200, result)

  } catch (err) {
    console.log(err.message)
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, 500, err.message)
  }
}

module.exports = {
  register
}