const resSuccess = (res, status, data, jsonMessage = {}) => {
  return res.status(status).json({...jsonMessage, data})
}

const resError = (res, status, message) => {
  return res.status(status).json({message})
}
module.exports = {
  resSuccess,
  resError
}