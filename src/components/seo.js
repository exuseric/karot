import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useSiteMeta } from '../utils/siteMetadata'
import { capitalize } from '../utils/format'

const SEO = ({ description, title, lang, meta }) => {
  const { title: siteMetaTitle, description: siteMetaDescription, author } = useSiteMeta()
  const metaDescription = description || siteMetaDescription

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={capitalize(title)}
      titleTemplate={`%s • ${siteMetaTitle}`}
      link={[
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Cabin&family=DM+Serif+Display&display=swap',
          rel: 'stylesheet'
        }
      ]}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'twitter:creator',
          content: author.name
        },
        {
          property: 'twitter:title',
          content: title
        },
        {
          property: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

export default SEO

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}
