import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Styled from 'react-emotion'

import Theme from '../Theme'

const ContentDiv = Styled('div')`
  background-color: ${Theme.colors.white};
  grid-area: main;
  max-width: 50rem;
  padding: 0 ${Theme.width['8']};

  @media (min-width: ${Theme.screens.md}) {
    padding: 0 ${Theme.width['16']} 0 0;
  }

  h1, h2 {
    font-weight: 100;
    font-family: 'settledown';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    margin: 0;
    line-height: 1;
  }

  h1 {
    font-size: 4rem;
    margin: ${Theme.width['4']} 0;
  }

  h2 {
    font-size: ${Theme.textSizes['4xl']};
    margin: ${Theme.width['4']} 0;
  }

  h3 {
    font-weight: ${Theme.fontWeights.normal};
    font-size: ${Theme.textSizes['2xl']};
    margin: ${Theme.width['4']} 0;
  }

  a {
    color: var(--link-color);
    position: relative;
    transition: color 500ms ease;

    &:hover {
      color: ${Theme.colors.black};
    }
  }

`

export const HTMLContent = ({ content }) => (
  <ContentDiv dangerouslySetInnerHTML={{ __html: content }} />
)

class Content extends Component {
  componentDidMount() {}

  render() {
    const { content, children, style } = this.props

    return (
      <ContentDiv style={style}>
        {content}
        {children}
      </ContentDiv>
    )
  }
}

Content.propTypes = {
  content: PropTypes.node,
}

HTMLContent.propTypes = Content.propTypes

export default Content
