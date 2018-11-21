import React from 'react'
import Helmet from 'react-helmet'

import Theme from '../Theme'

import 'normalize.css'

const LayoutBase = ({ children, title }) => (
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
    {children}
  </div>
)

export default LayoutBase
