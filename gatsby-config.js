const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'karot',
    description: 'A progressive information system for sharing and connecting information.',
    author: {
      name: 'Eric Maina',
      link: 'https://thisiseric.netlify.app'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'karot',
        short_name: 'karot',
        start_url: '/',
        icon: './src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
}
