const { allChapters, allArticles, articlesByChapterId, partsByChapterId, connections } = require('./utils/queries')
const sendQuery = require('./utils/sendQuery')
const output = require('./utils/output')

exports.handler = async (event) => {
  const users_token = process.env.FAUNA_CONSTITUTION_USER_CONNECTIONS_SECRET_KEY
  const main_token = process.env.FAUNA_CONSTITUTION_MAIN_SECRET_KEY
  const params = event.multiValueQueryStringParameters.q[0]
  const id = event.multiValueQueryStringParameters.id[0]

  if (params === 'getAllChapters') {
    try {
      const res = await sendQuery({ query: allChapters, variables: {}, auth: main_token })
      return output({ statusCode: 200, body: res })
    } catch (error) {
      return output({ statusCode: 500, body: error })
    }
  }
  if (params === 'getAllArticles') {
    try {
      const res = await sendQuery({ query: allArticles, variables: {}, auth: main_token })
      return output({ statusCode: 200, body: res })
    } catch (error) {
      return output({ statusCode: 500, body: error })
    }
  }

  if (params === 'getArticlesByChapterId') {
    try {
      const res = await sendQuery({ query: articlesByChapterId, variables: { id }, auth: main_token })
      return output({ statusCode: 200, body: res })
    } catch (error) {
      return output({ statusCode: 500, body: error })
    }
  }

  if (params === 'getPartsByChapterId') {
    try {
      const res = await sendQuery({ query: partsByChapterId, variables: { id }, auth: main_token })
      return output({ statusCode: 200, body: res })
    } catch (error) {
      return output({ statusCode: 500, body: error })
    }
  }

  if (params === 'getConnection') {
    try {
      const res = await sendQuery({ query: connections, variables: { id }, auth: main_token })
      return output({ statusCode: 200, body: res })
    } catch (error) {
      return output({ statusCode: 500, body: error })
    }
  }

  return output({ statusCode: 500, body: 'Looks like you hit an endpoint that does not exist' })
}
