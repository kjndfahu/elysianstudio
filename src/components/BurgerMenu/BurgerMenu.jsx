import React from 'react';
import styles from './BurgerMenu.module.scss'

function BurgerMenu({isActive, setActive}) {

    React.useEffect(() =>{
        if (isActive) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

    }, [isActive])

    return (
        <div className={`${styles.component} ${isActive ? styles.active : ""}`}>
            <div className={styles.wrapper }>
                    <div className={styles.list}>
                        <div className={styles.textblock}>
                            <li className={styles.aboutus}>О нас</li>
                        </div>
                        <div className={styles.textblock}>
                            <li className={styles.ourworks}>Наши работы</li>
                        </div>
                        <div className={styles.textblock}>
                            <li className={styles.why}>Почему мы</li>
                        </div>
                        <div className={styles.textblock}>
                            <li className={styles.webapp}>Веб-апп</li>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default BurgerMenu