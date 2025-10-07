const resSuccess = (res, status, message, data = []) => {
  return res.status(status).json({message, status, data: data})
}

const resError = (res, status, message) => {
  return res.status(status).json({message, status})
}
module.exports = {
  resSuccess,
  resError
}