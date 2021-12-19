import React from "react";
import styles from './RegisterPage.module.css'
import RegisterFormContainer from "../../AuthContent/RegisterForm/RegisterFormContainer";

const RegisterPage = ()=>{
    return (
        <div className={styles.registerWrapper}>
            reg
            <RegisterFormContainer/>
        </div>
    )
}

export default RegisterPage