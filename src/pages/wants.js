import React from 'react'

import LayoutBase from '../components/LayoutBase'
import Content from '../components/Content'
import WantList from '../components/WantList'

import Theme from '../Theme'

export default class IndexPage extends React.Component {
  render() {
    return (
      <LayoutBase>
        <Content
          style={{
            padding: `0`,
            maxWidth: '100vw',
            // eslint-disable-next-line
            ['--link-color']: `${Theme.colors.teal}`,
          }}
        >
          <WantList
            header="Things Randy Wants!!!"
            funny="But does he need them?"
            message="All of these items can be found at local retailers too! General
            things that I like are legos, board/card games, enamel pins to put
            on my backpack. There is always something that I am needing to fix
            around the house so a giftcard from lowes would be nice. Cold hard
            cash for a tattoo is always appreciated. Keep checking back here,
            as I think of things I will add them to the list."
            items={[
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
                      'https://www.champion.com/shop/champion/to-follow-gf68-y07472-1?categoryId=21218&mid=3156&source=LINK_AD:Z:CHAMP&SiteId=QFGLnEolOWg-EPtr8qd.M3iQv_4N2f2oXQ&cm_mmc=Linkshare-_-NA-_-NA-_-NA&d1=LINKSC&redirectLoop=true&originalReferrer=',
                   desc:'Reverse Weave Pullover',
                    color: 'grey',
                  },
                  {
                    link:
                      'https://teespring.com/no-deploy-fridays#pid=2&cid=2122&sid=front',
                    desc: 'No Deploy Fridays Developer T-shirt',
                  },
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/nike-mens-dry-challenger-7-2-in-1-running-shorts-18nikmmnkdryshrtcapb/18nikmmnkdryshrtcapb',
                    desc: "Dry Challenger 7' 2-in-1 Running Shorts",
                    color: 'Gunsmoke and heather',
                  },
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/adidas-mens-cotton-fleece-3-stripes-badge-of-sport-hoodie-18adimssntlsjcqrdatt/18adimssntlsjcqrdatt',
                    desc: 'Fleece 3-Stripes Badge Of Sport Hoodie',
                    color: 'Noble Maroon',
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
                  {
                    link:
                      'https://www.amazon.com/Agricola-All-Creatures-Big-Small/dp/B00855FMXM/ref=sr_1_2?ie=UTF8&qid=1543511762&sr=8-2&keywords=agricola+all+creatures+big+and+small',
                    desc: 'Agricola: All Creatures Big and Small',
                  },
                  {
                    link:
                      'https://www.amazon.com/Game-Fire-Card/dp/B01LY5G1C1/ref=sr_1_4?s=toys-and-games&ie=UTF8&qid=1543511791&sr=1-4&keywords=the+game',
                    desc: 'The Game',
                  },
                  {
                    link:
                      'https://www.amazon.com/Games-Hanabi-Card-Game/dp/B00CYQ9Q76/ref=sr_1_1?ie=UTF8&qid=1543511896&sr=8-1&keywords=hanabi',
                    desc: 'Hanabi',
                  },
                  {
                    link:
                      'https://www.amazon.com/CV-Game-Building-Characters-Board/dp/B00UOXUDWI/ref=sr_1_1?ie=UTF8&qid=1543512131&sr=8-1&keywords=cv+game',
                    desc: 'CV',
                  },
                  {
                    link:
                      'https://www.amazon.com/Mayfair-Games-MFG3505-Patchwork-Board/dp/B00RCCAPPE/ref=sr_1_1?ie=UTF8&qid=1543512251&sr=8-1&keywords=patchwork+game',
                    desc: 'Patchwork',
                  },
                  {
                    link:
                      'https://www.amazon.com/Z-Man-Games-ZM7101-Pandemic/dp/B00A2HD40E/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1543512610&sr=1-1&keywords=pandemic',
                    desc: 'Pandemic',
                  },
                  {
                    link:
                      'https://www.amazon.com/Czech-Games-00036CGE-Codenames-Pictures/dp/B01HT9DERU/ref=sr_1_2?ie=UTF8&qid=1543514048&sr=8-2&keywords=codenames+pictures',
                    desc: 'Codenames Pictures',
                  },
                  {
                    link:
                      'https://www.amazon.com/Exploding-Kittens-LLC-EKG-ORG1-1-Card/dp/B010TQY7A8/ref=sr_1_4?s=toys-and-games&ie=UTF8&qid=1543517383&sr=1-4&keywords=exploding+kittens',
                    desc: 'Exploding Kittens',
                  },
                ],
              },
              {
                cat: 'Movies',
                items: [
                  {
                    link:
                      'https://www.bestbuy.com/site/kingsman-the-secret-service-kingsman-the-golden-circle-4k-ultra-hd-blu-ray-blu-ray/6099907.p?skuId=6099907',
                    desc: 'Kingsmen 4k Combo',
                  },
                ],
              },
              {
                cat: 'Shoes',
                info: 'I wear a 9½',
                items: [
                  {
                    link:
                      'https://www.adidas.com/us/ultraboost-shoes/F36155.html',
                    desc: 'Ultraboost',
                    color: 'non dyed',
                  },
                  {
                    link:
                      'https://www.adidas.com/us/ultraboost-shoes/CM8111.html',
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
                      'https://www.amazon.com/Tile-Mate-Slim-Combo-Pack/dp/B01MF9VQOP',
                    desc: 'Tile Mate and Slim Combo Pack',
                    info: "I've lost my roomba to many times",
                  },
                  {
                    link: 'https://www.apple.com/shop/buy-tv/apple-tv-4k',
                    desc: 'Apple Tv 4k 32 gb',
                  },
                ],
              },
              {
                cat: 'Miscellaneous',
                items: [
                  {
                    link:
                      'https://www.keepitlocalok.com/buy-keep-it-local-card',
                    desc: 'Oklahoma Keep it Local card',
                  },
                ],
              },
            ]}
          />
        </Content>
      </LayoutBase>
    )
  }
}
