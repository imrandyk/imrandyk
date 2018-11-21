import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'react-emotion'

import Theme from '../Theme'

const FooterDiv = Styled('div')`
  padding: ${Theme.width['4']} 0;
  h2 {
    font-weight: 100;
    font-family: 'settledown';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    margin: 0;
    line-height: 1;
  }

  h2 {
    font-size: ${Theme.textSizes['4xl']};
    margin: ${Theme.width['4']} 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-area: foot;
    grid-gap: ${Theme.width['4']};
    justify-items: center;
    font-size: ${Theme.textSizes['3xl']};

    @media (min-width: ${Theme.screens.md}) {
      grid-template-columns: repeat(4, 1fr);
    }

    a {
      color: ${Theme.colors.teal};

      &:hover {
        color: ${Theme.colors['teal-dark']};
      }
    }
  }
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
            <h2>Where else can you find me?</h2>
            <div>
              <a
                href={`https://twitter.com/${
                  data.site.siteMetadata.social.twitter
                }`}
              >
                <i class="fab fa-twitter" />
              </a>
              <a
                href={`https://reddit.com/u/${
                  data.site.siteMetadata.social.reddit
                }`}
              >
                <i class="fab fa-reddit" />
              </a>
              <a
                href={`https://github.com/${
                  data.site.siteMetadata.social.github
                }`}
              >
                <i class="fab fa-github" />
              </a>
              <a href={`https://dev.to/${data.site.siteMetadata.social.devto}`}>
                <i class="fab fa-dev" />
              </a>
            </div>
          </FooterDiv>
        )}
      />
    )
  }
}

export default Footer
