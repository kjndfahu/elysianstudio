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
        <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
            <div className={styles.list}>
                <li className={styles.how_works} ></li>
                <li className={styles.price} ></li>
                <li className={styles.questions} ></li>
            </div>
            <div className={styles.infoblock}>
                <div className={styles.firstblock}>
                    <p className={styles.headoflist}></p>
                    <h4></h4>
                    <h4></h4>
                </div>
                <div className={styles.secondblock}>
                    <p className={styles.headoflist}></p>
                    <h4></h4>
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu