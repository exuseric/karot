const axios = require('axios')

module.exports = async ({ query, variables, auth }) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'https://graphql.fauna.com/graphql',
      headers: {
        Authorization: `Bearer ${auth}`
      },
      data: {
        query,
        variables
      }
    })
    return data
  } catch (error) {
    return error
  }
}
