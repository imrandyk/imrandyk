import React, { Component } from 'react'
import styled from 'react-emotion'

import NavigationHeader from './NavigationHeader'
import NavigationMenu from './NavigationMenu'

import Theme from '../Theme'

const Wrap = styled('div')`
  grid-area: nav;
  position: relative;

  &:before {
    border-color: ${Theme.colors.teal};
    border-style: solid;
    border-width: ${Theme.width['2']} 0;
    content: '';
    display: block;
    height: ${Theme.width['2']};
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;

    @media (min-width: ${Theme.screens.md}) {
      border-width: 0 ${Theme.width['4']};
      height: 100%;
      min-height: 100vh;
      max-height: 100%;
      width: ${Theme.width['4']};
    }
  }
`

const Sticky = styled('div')`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  position: sticky;
  top: ${Theme.width['4']};

  @media (min-width: ${Theme.screens.md}) {
    grid-template-columns: 1fr;
  }
`

class Navigation extends Component {
  render() {
    const { siteTitle } = this.props
    return (
      <Wrap id="navigation">
        <Sticky>
          <NavigationHeader siteTitle={siteTitle} />
          <NavigationMenu />
        </Sticky>
      </Wrap>
    )
  }
}

export default Navigation
