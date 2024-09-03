import React from 'react'
import Left from '../layout/Left'
import styles from "./Login.module.css"
import Right from '../layout/Right'

function Login() {
    return (
        <div className={styles.container}>
            <Left /> 
            <Right />
        </div>
    )
}

export default Login