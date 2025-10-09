const status = require('./status')
const code = require('./code')

const success = {
  //general success message
  REGISTER: {
    status: status.OK,
    statusCode: code.CREATED,
    message: 'Registration successfully',
  },

  CREATED: {
    status: status.OK,
    statusCode: code.CREATED,
    message: 'Created successfully',
  },

  LOGIN: {
    status: status.OK,
    statusCode:code.SUCCESS,
    message:'Login successfully'
  },

  UPDATE: {
    status: status.OK,
    statusCode:code.SUCCESS,
    message:'Update successfully'
  },

  DELETE: {
    status: status.OK,
    statusCode:code.SUCCESS,
    message:'Deleted successfully'
  },

  GET:{
    status: status.OK,
    statusCode: code.SUCCESS,
    message: 'Fetched successfully',
  },

  FIND:{
    status: status.OK,
    statusCode: code.SUCCESS,
    message: 'Fetched successfully',
  },
  
}

const error = {
  SERVER: {
    status: status.FAILED,
    statusCode: code.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },

  NOT_FOUND: {
    status: status.FAILED,
    statusCode: code.NOT_FOUND,
    message: 'Not found',
  },

  FIXED_EXPENSE_EXIST: {
    status: status.FAILED,
    statusCode: code.CONFLICT,
    message: 'Expense Already exist',
  },

  PASSWORD: {
    status: status.FAILED,
    statusCode: code.UNAUTHORIZED,
    message: 'Invalid password',
  }
}

module.exports = {
  success,
  error
}