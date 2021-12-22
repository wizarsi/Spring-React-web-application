import React from "react";
import styles from './MainPage.module.css'
import CheckContainer from "../../MainContent/Check/CheckContainer";
import TableContainer from "../../MainContent/Table/TableContainer";
import GraphContainer from "../../MainContent/Graph/GraphContainer";

const MainPage = ()=>{
    return (
        <div className={styles.mainWrapper}>
            <GraphContainer/>
            <CheckContainer/>
            <TableContainer/>
        </div>
    )
}

export default MainPage