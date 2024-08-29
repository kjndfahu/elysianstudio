import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './PortfolioSlider.css';
import 'swiper/css/navigation';
import sliderimage from '../../assets/sliderimage.png'
import {Autoplay, Navigation } from 'swiper/modules';

export default function PortfolioSlider() {
    return (
        <div className="portfolio-slider">
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                centeredSlides={true}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                modules={[ Navigation]}
                className="mySwiperPortfolio"
            >
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-block">
                        <img className="imageslider" src={sliderimage} alt="sliderimage"/>
                        <div className="textssliders">
                            <h4 className="slidermaintext">Сайт для банка</h4>
                            <p className="slidertext">Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>

                <div className=".swiper-button-prev"></div>
                <div className=".swiper-button-next"></div>
            </Swiper>
        </div>
    );
}