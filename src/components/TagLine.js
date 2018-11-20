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

    span {
        font-size: ${Theme.textSizes['4xl']};
        transition: transform .2s ease;
    }
  }

  & > span:nth-of-type(1n+1):hover span {
    transform: rotate(-9deg) scale(1.1);
  }

  & > span:nth-of-type(2n+2):hover span {
    transform: rotate(7deg) scale(1.1);
  }

  & > span:nth-of-type(3n+3):hover span {
    transform: rotate(-3deg) scale(1.1);
  }

  & > span:nth-of-type(4n+4):hover span {
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
        Developer
      </span>
      <span>
        <span role="img" aria-label="Running Shoe">
          👟
        </span>
        Sneaker Aficionado
      </span>
      <span>
        <span role="img" aria-label="Jeans">
          👖
        </span>
        Denim Head
      </span>
      <span>
        <span role="img" aria-label="Game Die">
          🎲
        </span>
        Game Master
      </span>
    </TagLineDiv>
  )
}

export default TagLine
