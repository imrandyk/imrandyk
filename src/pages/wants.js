import React from 'react'
import Styled from 'react-emotion'

import LayoutBase from '../components/LayoutBase'
import Content from '../components/Content'

import Theme from '../Theme'

const WantsDiv = Styled('div')`
h1 span {
    font-size: 1rem;
}
    ul {
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

    li {
        padding-bottom: ${Theme.width['4']};
        list-style: none;
    }

    span, div {
        color: ${Theme.colors['grey-dark']};
    }
`

export default class IndexPage extends React.Component {
  render() {
    const items = [
      {
        cat: 'Books',
        items: [
          {
            link:
              'https://www.amazon.com/gp/product/0393609391/ref=dbs_a_def_rwt_bibl_vppi_i0',
            desc: 'Astrophysics for People in a Hurry',
          },
          {
            link:
              'https://www.amazon.com/MORDENKAINENS-FOES-Accessory-Wizards-Team/dp/0786966246/ref=sr_1_1?s=books&ie=UTF8&qid=1542839937&sr=1-1&keywords=MORDENKAINEN%27S+TOME+OF+FOES',
            desc: "Mordenkainen's Tome of Foes",
          },
        ],
      },
      {
        cat: 'Clothes',
        info: 'I wear an Xl in shirts, jackets, and pants.',
        items: [
          {
            link:
              'https://www.dickssportinggoods.com/p/adidas-mens-post-game-fleece-bomber-jacket-18adimpstgmflcbmbaft/18adimpstgmflcbmbaft?',
            desc: 'Post Game Fleece Bomber Jacket',
            color: 'grey and black',
          },
          {
            link:
              'https://m.dickssportinggoods.com/p/adidas-mens-essentials-jacquard-crew-long-sleeve-shirt-18adimssntlsjqrdcatt/18adimssntlsjqrdcatt?recid=rechub_PageElement_rechub3_rr_1_2421_&rrec=true',
            desc: 'Mens Essentials Jacquard Crew Long Sleeve Shirt',
            color: 'grey or black',
          },
          {
            link:
              'https://teespring.com/no-deploy-fridays#pid=2&cid=2122&sid=front',
            desc: 'No Deploy Fridays Developer T-shirt',
          },
        ],
      },
      {
        cat: 'Games',
        items: [
          {
            link:
              'https://www.bestbuy.com/site/dragon-ball-fighterz-nintendo-switch/6255378.p?skuId=6255378',
            desc: 'Dragon Ball FighterZ - Switch',
          },
          {
            link:
              'https://www.bestbuy.com/site/super-mario-party-nintendo-switch/6255373.p?skuId=6255373',
            desc: 'Super Mario Party - Switch',
          },
          {
            link:
              'https://www.bestbuy.com/site/street-fighter-30th-anniversary-collection-nintendo-switch/6178215.p?skuId=6178215',
            desc: 'Street Fighter 30th Anniversary Collection - Switch',
          },
          {
            link:
              'https://www.bestbuy.com/site/diablo-iii-eternal-collection-nintendo-switch/6293800.p?skuId=6293800',
            desc: 'Diablo III: Eternal Collection - Switch',
          },
        ],
      },
      {
        cat: 'Shoes',
        info: 'I wear a 9½',
        items: [
          {
            link: 'https://www.adidas.com/us/ultraboost-shoes/F36155.html',
            desc: 'Ultraboost',
            color: 'non dyed',
          },
          {
            link: 'https://www.adidas.com/us/ultraboost-shoes/CM8111.html',
            desc: 'Ultraboost',
            color: 'cloud white and multicolor',
          },
          {
            link:
              'https://www.adidas.com/us/nmd_r1-stlt-parley-primeknit-shoes/AQ0943.html',
            desc: 'Nmd_R1 Stlt Parley',
          },
          {
            link:
              'https://m.dickssportinggoods.com/p/adidas-mens-essentials-jacquard-crew-long-sleeve-shirt-18adimssntlsjqrdcatt/18adimssntlsjqrdcatt?recid=rechub_PageElement_rechub3_rr_1_2421_&rrec=true',
            desc: 'Air Max 270',
            color: 'black and orange',
          },
          {
            link:
              'https://www.ugg.com/men-slippers/ascot-slipper/5379.html?dwvar_5379_color=CTEA#start=8&cgid=men-slippers',
            desc: 'Ascot Slipper',
            color: 'China Tea',
          },
        ],
      },
      {
        cat: 'Tech',
        info:
          'Some of these things are pretty pricey💰 so gift cards are always nice to help me lower what I would be paying.',
        items: [
          {
            link:
              'https://www.apple.com/shop/buy-ipad/ipad-9-7/128gb-silver-wifi',
            desc: 'iPad 9.7 in 128 gb wifi',
          },
          {
            link:
              'https://www.amazon.com/Arlo-Audio-Doorbell-Wire-free-Weather-resistant/dp/B07HXNPJLJ',
            desc: 'Arlo Audio Doorbell',
            info: 'Standalone doorbell only',
          },
          {
            link:
              'https://www.amazon.com/Arlo-Audio-Doorbell-Wire-free-Weather-resistant/dp/B07HXNPJLJ',
            desc: 'Tile Mate and Slim Combo Pack',
            info: "I've lost my roomba to many times",
          },
        ],
      },
    ]
    return (
      <LayoutBase>
        <Content
          style={{
            padding: `0 ${Theme.width['16']}`,
            // eslint-disable-next-line
            ['--link-color']: `${Theme.colors.teal}`,
          }}
        >
          <WantsDiv>
            <h1>
              Things Randy Wants!!! <span>But does he need them?</span>
            </h1>
            <p>
              All of these items can be found at local retailers too! General
              things that I like are legos, board/card games, enamel pins to put
              on my backpack. There is always something that I am needing to fix
              around the house so a giftcard from lowes would be nice. Keep
              checking back here, as I think of things I will add them to the
              list.
            </p>
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
                            <div>I would like this is in {s.color}</div>
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
        </Content>
      </LayoutBase>
    )
  }
}
