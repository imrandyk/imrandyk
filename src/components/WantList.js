import React from 'react'
import Styled from 'react-emotion'

import Theme from '../Theme'

const WantsDiv = Styled('div')`
  padding: 0 ${Theme.width['8']};

  @media (min-width: ${Theme.screens.md}) {
    padding: 0 ${Theme.width['16']};
  }

  h1 div {
    font-size: 1rem;
  }

  ul {
    @media (min-width: ${Theme.screens.md}) {
      display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    }
  }

  li {
    @media (min-width: ${Theme.screens.md}) {
      padding-bottom: ${Theme.width['4']};
      list-style: none;
    }
  }

  span, div {
      color: ${Theme.colors['grey-dark']};
  }
`

export default class WantList extends React.Component {
  render() {
    const { header, funny, message, items, colorPre } = this.props

    return (
      <WantsDiv>
        <h1>
          {header}
          {funny && <div>{funny}</div>}
        </h1>
        {message && <p>{message}</p>}
        {items.map((x, id) => {
          return (
            <section key={id}>
              <h3>{x.cat}</h3>
              {x.info && <span>{x.info}</span>}
              <ul>
                {x.items.map((s, sid) => {
                  return (
                    <li key={sid}>
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.desc}
                      </a>
                      {s.color && (
                        <div>
                          {colorPre !== undefined
                            ? colorPre
                            : 'I would like this is in'}{' '}
                          {s.color}
                        </div>
                      )}
                      {s.info && <div>{s.info}</div>}
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </WantsDiv>
    )
  }
}
