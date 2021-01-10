const allChapters = `
  query {
    findAllChapters {
      data {
        _id
        number
        title
      }
    }
  }
`
const allArticles = `
  query {
    findAllArticles {
      data {
        _id
        title
        content {
          _id
        }
        chapter {
          _id
        }
      }
    }
  }
`

const articlesByChapterId = `
  query find($id: String!){
    findArticleByChapterId(filter: $id) {
      _id
      number
      title
      chapter {
        _id
      }
    }
  }
`

const partsByChapterId = `
  query find($id: String!){
    findPartByChapterId(filter: $id) {
      _id
      number
      title
      content {
        _id
        title
        value
      }
    }
  }
`

const connections = `
  query connection($id: ID!) {
    findConnectionByID(id: $id) {
      connection
    }
  }
`
module.exports = { allChapters, allArticles, articlesByChapterId, partsByChapterId, connections }
