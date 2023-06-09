import React from 'react'
import "./Home.css"
import Product from "./Product";



function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/May/MayART/ATF/Shoes/V1/3000._CB591112201_.jpg"
          alt=""
        />

      <div className="home_row">
            <Product
            id="1"
            title="Apple iPhone 14 (128 GB) - Midnight"
            price={1200}
            rating={5}
            image="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
          />
            <Product
            id="2"
            title="Fire-Boltt Ninja Call Pro Plus 1.83 inch"
            price={50}
            rating={4}
            image="https://m.media-amazon.com/images/I/61S9aVnRZDL._SY450_.jpg"
          />

            <Product
            id="3"
            title="boAt Rockerz 450 Bluetooth On Ear Headphones"
            price={100}
            rating={4}
            image="https://m.media-amazon.com/images/I/610bnYBwzmL._SY450_.jpg"
            />

            <Product
            id="4"
            title="LG RL2 Powerful Portable Sound Party Speaker"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bG4NNyKkL._AC_UY218_.jpg"
            />

          </div>
          <div className="home_row">
            <Product
            id="5"
            title="Grandma's Bag of Stories: Sudha Murty"
            price={10}
            rating={5}
            image="https://m.media-amazon.com/images/I/61yB0UFlM3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
            <Product
            id="6"
            title="Energize Your Mind: Gaur Gopal Das"
            price={8}
            rating={4}
            image="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />

            <Product
            id="7"
            title="The Hidden Hindu"
            price={11}
            rating={5}
            image="https://m.media-amazon.com/images/I/51nL8mRVtVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />

            <Product
            id="8"
            title="The Power of Your Subconscious Mind"
            price={10}
            rating={5}
            image="https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />

        </div>
      
      </div>

    </div>
  )
}

export default Home
