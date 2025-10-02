const fixedExpense = require('../models/fixedExpense');

const create = async (params) => {
  return fixedExpense.create(params);
};

const update = async (params) => {
  return fixedExpense.update(params);
};

const find = async (params) => {
  return fixedExpense.findOne(params);
};

const remove = async (params) => {
  return fixedExpense.destroy(params);
};

const get = async (params) => {
  return fixedExpense.findAll(params);
};

module.exports = {
  create,
  update,
  find,
  remove,
  get
};
