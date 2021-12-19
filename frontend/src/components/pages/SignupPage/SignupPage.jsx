import React from "react";
import styles from './SignupPage.module.css'
import SignupFormContainer from "../../AuthContent/LoginForm/LoginFormContainer";


const SignupPage = () => {

    return (
        <div className={styles.signupWrapper}>
            signup
            <SignupFormContainer/>
        </div>
    )
}

export default SignupPage