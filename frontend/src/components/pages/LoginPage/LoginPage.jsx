import React from "react";
import styles from './LoginPage.module.css'
import LoginFormContainer from "../../AuthContent/LoginForm/LoginFormContainer";


const LoginPage = () => {

    return (
        <div className={styles.loginWrapper}>
            <LoginFormContainer/>
        </div>
    )
}

export default LoginPage