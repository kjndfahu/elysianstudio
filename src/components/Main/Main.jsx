import React from 'react';
import styles from './Main.module.scss'
import Hero from "../Hero/Hero";
import Qualifications from "../Qualifications/Qualifications";
import Why from "../Why/Why";
import TGBot from "../TGBot/TGBot";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import AboutUs from "../AboutUs/AboutUs";
import TechStack from "../TechStack/TechStack";

function Main() {
    return (
        <div className={styles.wrapper}>
            <Hero/>
            <Portfolio/>
            <TechStack/>
            <Qualifications/>
            <Why/>
            <TGBot/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default Main;