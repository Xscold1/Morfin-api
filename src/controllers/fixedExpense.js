const {resSuccess, resError} = require('../utils/response')
const {success, error} = require('../constants/response')
const code = require('../constants/code')
const fixedExpense = require('../services/fixedExpense')

const create = async (req, res) => {
  try {

    await fixedExpense.create(req.body)

    return resSuccess(res, success.CREATED.statusCode, success.CREATED.message)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}

module.exports = {
  create
}