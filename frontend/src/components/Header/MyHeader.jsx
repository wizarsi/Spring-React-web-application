import React from "react";
import styles from './MyHeader.module.css'
import logo from "../../myAssets/img/duck.png"
import Logout from "./Logout/Logout";

const MyHeader = (props) => {
    const logout = () => {
        if (localStorage.getItem("userRSWebLab4")) {
            return (
                <div className={styles.logoutWrapper}>
                        <div className={styles.userSign}>Пользователь: {JSON.parse(localStorage.getItem("userRSWebLab4")).username}</div>
                        <div>
                            <Logout onClick={props.logout}/>
                        </div>
                </div>

            )
        }
    }
    return (
        <div className={styles.header}>
            <div><img className={styles.logo} src={logo} title="уточка.com"/></div>
            <div className={styles.aboutInfo}>
                <div>Васильев Андрей Юрьевич</div>
                <div>P3215</div>
                <div>№ варианта 8388</div>
            </div>
            {
                logout()
            }


        </div>
    )
}

export default MyHeader