import React from 'react'
import styles from "./Right.module.css"
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Right() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.icon}></div>
                <h1 className={styles.header}>Create Account</h1>
                <p className={styles.description}> For business. Band or celebrity</p>
                <form action="" className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>First name</label>
                            <input type="text" />
                        </div>
                        <div className={styles.col}>
                            <label>Last name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}> 
                            <label>Email or phone number</label>
                            <input type="text" />
                        </div>
                        <div className={styles.col}>
                            <label>Date of birth</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className={styles.col}>
                            <label>Confirm Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" />
                                <label>I agree to all the <a href="" style={{color: "blue", textDecoration:'none'}}>Terms</a> and <a href="" style={{color: "blue", textDecoration:'none'}}>Privacy Policy</a></label> 
                            </div>
                        </div>
                        <div className={styles.col}>
                            <a href="" style={{color: "blue", textDecoration:'none', textAlign: "end"}} >Forgot Password?</a>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <button className={styles.account}>Create Account</button>
                        </div>
                        <div className={styles.col}>
                            <button className={styles.SignIn}>Sign-in With Google</button>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Don{"'"}t have account? 
                        <a href="" style={{color: "blue", textDecoration:'none'}}>Log In</a>
                    </div>
                </form>
                <div className={styles.social}>
                    <button className={styles.google}>
                        <FaGooglePlay style={{fontSize: "24px"}}/>
                        Google Play
                    </button>
                    <button className={styles.apple}>
                        <FaApple style={{fontSize: "24px"}}/>
                        App Store
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Right