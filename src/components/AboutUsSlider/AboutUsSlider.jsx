import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './AboutUsSlider.module.scss';
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

const AboutUsSlider = () => {
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                className={styles.mySwiper}
                grabCursor={true}
                slideToClickedSlide={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        <div className={styles.slideContent}>
                            <div className={styles.textcontainer}>
                                <h3 className={styles.title}>{slide.title}</h3>
                                <p className={styles.subtitle}>{slide.subtitle}</p>
                                <div className={styles.btn}>Подробнее</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default AboutUsSlider;