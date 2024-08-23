import React from 'react'
import styles from './SpecialitiesText.module.scss'

function SpecialitiesText({title, p1, p2, p3}) {
    return (
        <>
            <h3 className={styles.specialityname}>{title}</h3>
            <div className={styles.specinfo}>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
        </>
    )
}

export default SpecialitiesText;