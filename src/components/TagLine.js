import React from 'react'
import Styled from 'react-emotion'

import Theme from '../Theme'

const TagLineDiv = Styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  & > span {
    cursor: alias;
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;
    width: 100%;

    span:first-of-type {
        font-size: ${Theme.textSizes['4xl']};
        transition: transform .2s ease;
    }

    span:last-of-type {
      display: none;
      text-align: center;
      @media (min-width: ${Theme.screens.md}) {
        display: initial;
      }
    }
  }

  & > span:nth-of-type(1n+1):hover span:first-of-type  {
    transform: rotate(-9deg) scale(1.1);
  }

  & > span:nth-of-type(2n+2):hover span:first-of-type  {
    transform: rotate(7deg) scale(1.1);
  }

  & > span:nth-of-type(3n+3):hover span:first-of-type  {
    transform: rotate(-3deg) scale(1.1);
  }

  & > span:nth-of-type(4n+4):hover span:first-of-type  {
    transform: rotate(9deg) scale(1.1);
  }
`

const TagLine = () => {
  return (
    <TagLineDiv>
      <span>
        <span role="img" aria-label="Man Technologist">
          👨‍💻
        </span>
        <span>Developer</span>
      </span>
      <span>
        <span role="img" aria-label="Running Shoe">
          👟
        </span>
        <span>Sneaker Aficionado</span>
      </span>
      <span>
        <span role="img" aria-label="Jeans">
          👖
        </span>
        <span>Denim Head</span>
      </span>
      <span>
        <span role="img" aria-label="Game Die">
          🎲
        </span>
        <span>Game Master</span>
      </span>
    </TagLineDiv>
  )
}

export default TagLine
