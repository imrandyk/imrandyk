import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

import headerImg from './header.png'
import Theme from '../Theme'

const Wrap = styled('span')`
  display: block;
  text-align: center;
  width: 100%;

  @media (min-width: ${Theme.screens.md}) {
    padding-left: ${Theme.width['8']};
  }

  img {
    border-radius: ${Theme.borderRadius.full};
    height: 25vw;
    margin: ${Theme.width['2']};
    width: 25vw;

    @media (min-width: ${Theme.screens.md}) {
      height: auto;
      margin: 0 0 ${Theme.width['4']} 0;
      width: auto;
    }
  }
`

class NavigationHeader extends Component {
  render() {
    return (
      <Wrap>
        <Link to="/">
          <img src={headerImg} alt={this.props.siteTitle} />
        </Link>
      </Wrap>
    )
  }
}

export default NavigationHeader
