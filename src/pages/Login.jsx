import React from 'react'
import Left from '../layout/left'
import styles from "./Login.module.css"
import Right from '../layout/right'

function Login() {
    return (
        <div className={styles.container}>
            <Left /> 
            <Right />
        </div>
    )
}

export default Login