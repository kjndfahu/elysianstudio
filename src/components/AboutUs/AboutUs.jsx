import React from 'react'
import styles from './AboutUs.module.scss'
import AboutUsSliderTwo from "../AboutUsSliderTwo/AboutUsSliderTwo";


function AboutUs() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.maintext}>О нас</h2>
                <AboutUsSliderTwo/>
            </div>
        </div>
    )
}

export default AboutUs