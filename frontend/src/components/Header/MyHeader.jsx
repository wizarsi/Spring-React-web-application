import React from "react";
import styles from './MyHeader.module.css'
import logo from "../../myAssets/img/duck.png"
import Logout from "./Logout/Logout";
import {NavLink} from "react-router-dom";

const MyHeader = (props)=>{
    return (
        <div className={styles.header}>
            <div><img className={styles.logo} src={logo} title="уточка.com"/></div>
            <div className={styles.aboutInfo}>
                <div>Васильев Андрей Юрьевич</div>
                <div>P3215</div>
                <div>№ варианта 8388</div>
                <div>
                    <NavLink to={"/main"}>App</NavLink>
                </div>
            </div>
            <div className={styles.logout} >
                <Logout onClick = {props.logout}/>
            </div>

        </div>
    )
}

export default MyHeader