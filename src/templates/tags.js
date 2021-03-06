import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content from '../components/Content'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = (
      <ul>
        {posts.map(post => (
          <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>
              <h2>{post.node.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    )
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <h3>{tagHeader}</h3>
        <Content content={postLinks} />
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
