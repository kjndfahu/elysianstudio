import React from 'react'
import styles from './AboutUs.module.scss'
import AboutUsSlider from "../AboutUsSlider/AboutUsSlider";


function AboutUs() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.maintext}>О нас</h2>
                <AboutUsSlider/>
            </div>
        </div>
    )
}

export default AboutUs