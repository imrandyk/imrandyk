import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'react-emotion'

// import Theme from '../Theme'

const FooterDiv = Styled('div')`
grid-area: foot;
`

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query FooterQuery {
            site {
              siteMetadata {
                social {
                  twitter
                  github
                  reddit
                  devto
                }
              }
            }
          }
        `}
        render={data => (
          <FooterDiv>
            {data.site.siteMetadata.social.twitter}
            <br /> {data.site.siteMetadata.social.reddit} <br />
            {data.site.siteMetadata.social.github} <br />
            {data.site.siteMetadata.social.devto}
          </FooterDiv>
        )}
      />
    )
  }
}

export default Footer
