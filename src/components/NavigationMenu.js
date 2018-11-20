import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

import Theme from '../Theme'

const Menu = styled('div')`
  display: grid;
  grid-column: 2/-1;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (min-width: ${Theme.screens.md}) {
    grid-column: 1;
    grid-template-columns: 1fr;
  }

  a {
    color: ${Theme.colors.teal};
    font-size: ${Theme.textSizes.sm};
    padding: ${Theme.width['4']} 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 500ms ease;
    width: 100%;

    @media (min-width: ${Theme.screens.md}) {
      span {
        padding-left: ${Theme.width['8']};
      }

      &:before {
        border-color: ${Theme.colors.teal};
        border-style: solid;
        border-width: 0 ${Theme.width['4']};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: border-color 500ms ease;
        width: ${Theme.width['4']};
      }
    }

    &:hover {
      color: ${Theme.colors['teal-dark']};

      &:before {
        border-color: ${Theme.colors['teal-dark']};
      }
    }
  }
`

class NavigationMenu extends Component {
  render() {
    return (
      <Menu>
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
        <Link to="/tags">
          <span>TAGS</span>
        </Link>
        <Link to="/contact">
          <span>CONTACT</span>
        </Link>
      </Menu>
    )
  }
}

export default NavigationMenu
