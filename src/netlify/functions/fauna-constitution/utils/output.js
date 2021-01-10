module.exports = ({ statusCode, body }) => {
  return {
    statusCode,
    body: JSON.stringify(body, null, 2)
  }
}
