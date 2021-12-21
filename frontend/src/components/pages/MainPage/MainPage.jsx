import React from "react";
import styles from './MainPage.module.css'
import CheckContainer from "../../MainContent/Check/CheckContainer";
import TableContainer from "../../MainContent/Table/TableContainer";

const MainPage = ()=>{
    return (
        <div className={styles.mainWrapper}>
            <CheckContainer/>
            <TableContainer/>
        </div>
    )
}

export default MainPage