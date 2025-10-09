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

  const result = await fixedExpense.findOne({where: {name: name}});
  
  return result;
};

const remove = async (params) => {
  return await fixedExpense.destroy(params);
};

const get = async (page, limit) => {

  const params = {
    limit, 
    offset: (page - 1) * limit,
  };

  const result = await fixedExpense.findAll(params);

  const type = {
    0: 'Daily',
    1: 'Monthly',
  }

  return result.map(item => ({
    id: item.id,
    name: item.name,
    amount: item.amount,
    billing: item.billing,
    type: type[item.type],
    date_from: item.date_from,
    date_to: item.date_to
  })) 
};

module.exports = {
  create,
  update,
  find,
  findByName,
  remove,
  get
};
