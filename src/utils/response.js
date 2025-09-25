const resSuccess = (res, status, message, data = {}) => {
  return res.status(status).json({
    message, 
    status,
    ...data
    })
}

const resError = (res, status, message) => {
  return res.status(status).json({message})
}
module.exports = {
  resSuccess,
  resError
}