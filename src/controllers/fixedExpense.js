const {resSuccess, resError} = require('../utils/response')
const {success, error} = require('../constants/response')
const code = require('../constants/code')
const fixedExpense = require('../services/fixedExpense')

const create = async (req, res) => {
  try {

    const result = await fixedExpense.findByName(req.body)

    if(result) {
      return resError(res, error.FIXED_EXPENSE_EXIST.statusCode, error.FIXED_EXPENSE_EXIST.message)
    } 

    await fixedExpense.create(req.body)

    return resSuccess(res, success.CREATED.statusCode, success.CREATED.message)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}
const get = async (req, res) => {
  try {
    const p = 1
    const l = 10

    const data = await fixedExpense.get(p, l)

    console.log(data)

    return resSuccess(res, success.GET.statusCode, success.GET.message, data)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}
const update = async (req, res) => {
  try {

    await fixedExpense.create(req.body)

    return resSuccess(res, success.UPDATE.statusCode, success.UPDATE.message)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}
const show = async (req, res) => {
  try {
    const data = await fixedExpense.find(req.params)

    return resSuccess(res, success.GET.statusCode, success.GET.message, data)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}
const remove = async (req, res) => {
  try {

    await fixedExpense.create(req.body)

    return resSuccess(res, success.DELETE.statusCode, success.DELETE.message)

  } catch (err) {
    if(err.isHandled) return resError(res, err.code, err.message)
    return resError(res, code.INTERNAL_SERVER_ERROR, err.message)
  }
}

module.exports = {
  create,
  get,
  show,
  update,
  remove
}