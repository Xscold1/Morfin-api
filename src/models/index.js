const Debt = require('./debts');
const Expense = require('./expense');
const FixedExpense = require('./fixedExpense');
const User = require('./user');
const Payment = require('./payment');

User.hasMany(Debt, { as: 'debts', foreignKey: 'user_id' });
User.hasMany(Expense, { as: 'expenses', foreignKey: 'user_id' });
User.hasMany(FixedExpense, { as: 'fixedExpenses', foreignKey: 'user_id' });
User.hasMany(Payment, { as: 'payments', foreignKey: 'user_id' });
Payment.belongsTo(Debt, { as: 'debts', foreignKey: 'debt_id' });
Debt.hasMany(Payment, { as: 'payments', foreignKey: 'debt_id' });
Expense.hasMany(FixedExpense, { as: 'fixed_expenses', foreignKey: 'fixed_expenses_id' });

module.exports = {
  Debt,
  Expense,
  FixedExpense,
  User,
  Payment
}