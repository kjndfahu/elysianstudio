import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AboutUsSliderTwo.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
    { id: 1,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
    { id: 2,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
    { id: 3,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
    { id: 4,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
    { id: 5,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
    { id: 6,
        title: 'Заголовок',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet' +
            ' sapien fringilla, mattis ligula consectetur, ultrices mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ' +
            'massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien' +
            ' fringilla, mattis ligula consectetur, ultrices mauris.' },
];

const AboutUsSliderTwo = () => {
    return (
        <div className="sliderContainer">
            <Swiper
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                loop={true}
                className="mySwiper"
                grabCursor={true}
                slideToClickedSlide={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="slide">
                        <div className="slideContent">
                            <div className="textcontainer">
                                <h3 className='title'>{slide.title}</h3>
                                <p className="subtitle">{slide.subtitle}</p>
                                <div className="btn">Подробнее</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default AboutUsSliderTwo;