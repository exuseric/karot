import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMeta = () => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author {
            name
            link
          }
        }
      }
    }
  `)
  return siteMetadata
}
