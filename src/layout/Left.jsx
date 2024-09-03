import React from 'react'
import styles from "./Left.module.css"; 

function Left() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Social media shared today, tomorrow or by location</h1>
            <div className={styles.photo}></div>
        </div>
    )
}

export default Left