import React from 'react';
import '../Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="9832"
                        title="Garmin 010-02173-11 Venu, GPS Smartwatch with Bright Touchscreen Display, Features Music, Body Energy Monitoring"
                        price={400.99} 
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_UL320_.jpg"
                    />
                     <Product
                        id="9321"
                        title="Saucony Men's Crew Multipack Low Cut Comfort Breathable Casual T-Shirt"
                        price={15.99} 
                        rating={2}
                        image="https://m.media-amazon.com/images/I/710o0VupScL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="294830"
                        title="Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack"
                        price={18.29} 
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81PE-Og4DlL._AC_UL320_.jpg"
                    />
                    <Product
                        id="12932"
                        title="Black Panther (2018) (4K UHD) Chadwick Boseman"
                        price={3.99} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/616RcIbPrtL._AC_SX184_.jpg"
                    />
                    <Product
                        id="482042"
                        title="Apple IPad Air 2 WI-FI 64GB Space Gray"
                        price={310.49} 
                        rating={2}
                        image="https://m.media-amazon.com/images/I/61N8VrVeFWL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="942117"
                        title="Samsung Electronics UN32N5300AFXZA 32' 1080p Smart LED TV (2018), Black"
                        price={237.99} 
                        rating={3}
                        image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL320_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
