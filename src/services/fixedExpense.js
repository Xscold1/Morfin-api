const fixedExpense = require('../models/fixedExpense');

const create = async (params) => {
  return await fixedExpense.create(params);
};

const update = async (params) => {
  return await fixedExpense.update(params);
};

const find = async (params) => {
  const { id } = params
  return await fixedExpense.findByPk(id);
};

const findByName = async (params) => {
  const { name } = params
  return await fixedExpense.findOne({name: name});
};

const remove = async (params) => {
  return await fixedExpense.destroy(params);
};

const get = async (params) => {
  const result = await fixedExpense.findAll();
  return result 
};

module.exports = {
  create,
  update,
  find,
  findByName,
  remove,
  get
};
