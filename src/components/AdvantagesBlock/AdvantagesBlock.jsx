import React from 'react';
import styles from './AdvantagesBlock.module.scss'

function AdvantagesBlock({title, p1}) {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.specialityname}>{title}</h3>
            <div className={styles.specinfo}>
                <p>{p1}</p>
            </div>
        </div>
    )
}

export default AdvantagesBlock;