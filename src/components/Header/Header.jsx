import React from 'react';
import styles from './Header.module.scss'
import {Logo} from "../Svgs";
import {motion} from "framer-motion";

function Header() {
    const data = ['О нас', 'Наши работы', 'Почему мы', 'Веб-апп']

    return (
        <div className={styles.wrapper}>
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
            </div>
        </div>
    )
}

export default Header;