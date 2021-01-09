exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Check for the page match on the client
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*'

    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    // Ignore auth0-js during the build stage
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
