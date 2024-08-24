import React from 'react';
import styles from './Header.module.scss'
import {Logo} from "../Svgs/Svgs";
import {motion} from "framer-motion";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
    const data = ['О нас', 'Наши работы', 'Почему мы', 'Веб-апп']
    const [activeBurger, setActiveBurger] = React.useState(false)

    return (
        <div className={styles.wrapper}>
            <BurgerMenu isActive={activeBurger} setActive={setActiveBurger}/>
            <div className={styles.content}>
                <div className={styles.leftblock}>
                    <Logo/>
                    <div className={styles.logotext}>
                        <h2 className={styles.maintext}>ElysianStudio</h2>
                        <p className={styles.paragraph}>Ваши идеи – наша реальность</p>
                    </div>
                </div>
                <div className={styles.rightblock}>
                    {data.map((title) => (
                        <motion.div className={styles.buttonsdiv} whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>
                            <div className={styles.btntext}>
                                {title}
                            </div>
                        </motion.div>
                    ))}
                    <motion.div className={styles.makeorderbtn} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        Сделать заказ
                    </motion.div>
                </div>
                <div className={styles.burger}>
                    {activeBurger ?
                        <svg onClick={() => setActiveBurger(false)} width="35" height="35" viewBox="0 0 35 35"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3848 8L8 26.3848M26.3848 26.3848L8 8" stroke="#07040C" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg> :
                        <svg onClick={() => setActiveBurger(true)} width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                                <rect y="0.5" width="26" height="3" rx="1.5" fill="#F0E9DF"/>
                                <rect y="8.5" width="26" height="3" rx="1.5" fill="#F0E9DF"/>
                                <rect y="16.5" width="26" height="3" rx="1.5" fill="#F0E9DF"/>
                            </g>
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;