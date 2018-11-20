import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogExcerpt from '../components/BlogExcerpt'
import TagLine from '../components/TagLine'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout title="Home | Im RandyK Codes">
        <div>
          <h1>I'm Randy K.</h1>
          <TagLine />
        </div>
        <div>
          <h2>Recent Musings</h2>
          {posts.map(({ node: post }) => (
            <BlogExcerpt
              key={post.id}
              id={post.id}
              color={post.frontmatter.color}
              slug={post.fields.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            color
          }
        }
      }
    }
  }
`
