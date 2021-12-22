import React from "react";
import styles from './MainPage.module.css'
import CheckContainer from "../../MainContent/Check/CheckContainer";
import TableContainer from "../../MainContent/Table/TableContainer";
import GraphContainer from "../../MainContent/Graph/GraphContainer";

const MainPage = ()=>{
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.control}>
                <GraphContainer/>
                <CheckContainer/>
            </div>
            <div className={styles.tableResults}>
                <TableContainer/>
            </div>
        </div>
    )
}

export default MainPage