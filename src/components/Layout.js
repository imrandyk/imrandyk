import React from 'react'
import Particles from 'react-particles-js'
import Styled from 'react-emotion'

import LayoutBase from './LayoutBase'
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
  <LayoutBase>
    <NavBgDiv>
      <Particles
        params={{
          particles: {
            number: {
              value: 3000,
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
  </LayoutBase>
)

export default TemplateWrapper
