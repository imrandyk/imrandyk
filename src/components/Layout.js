import React from 'react'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'
import Styled from 'react-emotion'

import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'
import Theme from '../Theme'

import 'normalize.css'

// Styles
const PageDiv = Styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'nav'
                       'main'
                       'foot';

  @media (min-width: ${Theme.screens.md}) {
    grid-gap: ${Theme.width['4']};
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'nav main'
                          'nav foot';
  }
`

const NavBgDiv = Styled('div')`
  div {
    position: fixed;
    height: 50vh;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;

    @media (min-width: ${Theme.screens.md}) {
      height: 100vh;
      width: 250px;
    }
  }
`

const TemplateWrapper = ({ children, title }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      style={[
        {
          cssText: `
                  @font-face {
                    font-family: 'settledown';
                    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/settle_down-webfont.woff2') format('woff2'),
                         url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/settle_down-webfont.woff') format('woff');
                    font-weight: 100;
                    font-style: normal;
                  }

                  body {
                      background-color: ${Theme.colors.white};
                      color: ${Theme.colors.black};
                      font-family: ${Theme.fonts.sans};
                      font-size: ${Theme.textSizes.base};
                      font-weight: ${Theme.fontWeights.normal};
                  }
              `,
        },
      ]}
      lang="en"
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500,600,700|Special+Elite',
          rel: 'stylesheet',
        },
        {
          href: 'https://use.fontawesome.com/releases/v5.5.0/css/brands.css',
          rel: 'stylesheet',
          integrity:
            'sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW',
          crossorigin: 'anonymous',
        },
        {
          href:
            'https://use.fontawesome.com/releases/v5.5.0/css/fontawesome.css',
          rel: 'stylesheet',
          integrity:
            'sha384-u5J7JghGz0qUrmEsWzBQkfvc8nK3fUT7DCaQzNQ+q4oEXhGSx+P2OqjWsfIRB8QT',
          crossorigin: 'anonymous',
        },
      ]}
    />
    <NavBgDiv>
      <Particles
        params={{
          particles: {
            number: {
              value: 1000,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: [
                '#e3342f',
                '#f6993f',
                '#38c172',
                '#3490dc',
                '#6574cd',
                '#9561e2',
                '#f66d9b',
                '#4dc0b5',
              ],
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: false,
            },
          },
          retina_detect: true,
        }}
      />
    </NavBgDiv>
    <PageDiv>
      <Navigation siteTitle={title} style={{ gridArea: 'nav' }} />
      <Content content={children} style={{ gridArea: 'main' }} />
      <Footer />
    </PageDiv>
  </div>
)

export default TemplateWrapper
