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
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/nike-mens-dry-challenger-7-2-in-1-running-shorts-18nikmmnkdryshrtcapb/18nikmmnkdryshrtcapb',
                    desc: "Dry Challenger 7' 2-in-1 Running Shorts",
                    color: 'Gunsmoke and heather',
                  },
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/nike-mens-dry-woven-camo-training-jacket-18nikmmnkdryjkttmnft/18nikmmnkdryjkttmnft',
                    desc: 'Dry Woven Camo Training Jacket',
                  },
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/adidas-originals-mens-rib-beanie-18adimrgnlsrbbnflacw/18adimrgnlsrbbnflacw',
                    desc: "Men's Rib Beanie",
                  },
                  {
                    link:
                      'https://www.dickssportinggoods.com/p/nike-mens-pro-3-4-length-camo-compression-tights-18nikmmnptght3qt2apb/18nikmmnptght3qt2apb',
                    desc: '3/4 Length Camo Compression Tights',
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
                  {
                    link:
                      'https://www.bestbuy.com/site/thor-ragnarok-includes-digital-copy-4k-ultra-hd-blu-ray-blu-ray-2017/6139459.p?skuId=6139459',
                    desc: 'Thor Ragnarok 4k',
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
                  {
                    link:
                      'https://www.amazon.com/Sperry-Mens-Avenue-Duck-Brown/dp/B00QR0LL9G/ref=sr_1_1?s=apparel&ie=UTF8&qid=1542988829&sr=1-1&nodeID=7147441011&psd=1&keywords=duck+boots&refinements=p_89%3ASPERRY',
                    desc: 'Avenue Duck Boot Chukka Boot',
                    color: 'Tan and brown',
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
              {
                cat: 'Leathercraft Tools',
                items: [
                  {
                    link:
                      'https://www.amazon.com/Aiskaer-Stainless-Diamond-Stitching-Polished/dp/B0757MH9T7/ref=sr_1_2?ie=UTF8&qid=1542989522&sr=8-2&keywords=aiskaer+latest+model+stainless+steel+4mm',
                    desc: 'Diamond Lacing Stitching Chisel Set',
                  },
                  {
                    link:
                      'https://www.amazon.com/Dsmile-1-X-Scratch-Awl/dp/B00I4BJLFW/ref=sr_1_1?ie=UTF8&qid=1542989605&sr=8-1&keywords=dsmile+1+x+scratch+awl',
                    desc: 'Scratch Awl',
                  },
                  {
                    link:
                      'https://www.amazon.com/YazyCraft-Multi-Size-Slicker-Leathercraft-Burnishing/dp/B00IZAV998/ref=sr_1_1_sspa?ie=UTF8&qid=1542989700&sr=8-1-spons&keywords=yazycraft+multi-size&psc=1',
                    desc: 'Wood Slicker',
                  },
                  {
                    link:
                      'https://www.amazon.com/TEKTON-30603-Fiberglass-Handle-16-Ounce/dp/B00KX4KB5M/ref=sr_1_1?ie=UTF8&qid=1542989776&sr=8-1&keywords=tekton+30603+fiberglass+handle+rubber+mallet%2C+16-ounce',
                    desc: 'Rubber Mallet',
                  },
                  {
                    link:
                      'https://www.amazon.com/Safety-Skiver-3001-00-Replacement-3002-00/dp/B00IVS667Y/ref=sr_1_1?ie=UTF8&qid=1542989830&sr=8-1&keywords=tandy+safety+skiver',
                    desc: 'Safety Skiver',
                  },
                ],
              },
            ]}
          />
          <WantList
            header="Things Hannah Wants!!!"
            funny="But does she need them?"
            colorPre="She wants this in"
            items={[
              {
                cat: 'Clothes',
                info: '',
                items: [
                  {
                    link:
                      'https://www.thenorthface.com/shop/womens-terra-metro-funnel-neck-pullover-nf0a3lkk?variationId=3YE#hero=0',
                    desc: 'Terra Metro Funnel Necl Pullover',
                    color: 'fig',
                    info: 'She saw this at dillards',
                  },
                  {
                    link:
                      'https://www.dillards.com/p/the-north-face-train-n-logo-crop-pullover/508414149?googleShop=Y&cm_mmc=GooglePLAs-_-Vendor+-+The+North+Face+-+Shopping-_-g-_-null&gclid=CjwKCAiAiuTfBRAaEiwA4itUqLYSJBhQiNEYNs22lxm82679iiqiKzPsvnWBGZ_EiU_0lFOFy6aUshoCVmYQAvD_BwE',
                    desc: 'Train N Logo Crop Pullover',
                    color: 'fig',
                  },
                  {
                    link:
                      'https://www.dillards.com/p/the-north-face-urban-exploration-alphabet-city-quilted-parka/508471817?singleProductResult=urban+exploration+alphabet+city+quilted+parka',
                    desc: 'Urban Exploration Alphabet City Quilted Parka',
                    color: 'Misty Rose',
                  },
                  {
                    link: 'https://www.vonmaur.com/Product.aspx?ID=1462673',
                    desc: 'Cozy Slacker Jacket',
                    color: 'blue',
                    info:
                      "We found this at dillars in 3 colors but I can't find it on any website but Von Maur",
                  },
                  {
                    link:
                      'https://www.thenorthface.com/shop/womens-thermoball-jacket-nf0a3ku3?variationId=XYM#hero=0',
                    desc: 'Thermoball Jacket',
                    color: 'matte black',
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
