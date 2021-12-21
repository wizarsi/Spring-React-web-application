import React, {useEffect} from 'react';
import styles from "./Table.module.css"
import Entry from "./Entry/Entry";

const Table = (props) => {
    useEffect(()=>{
        props.getDataOfEntries()
    },[])
    return (
        <div className={styles.tableContainer}>
            <table>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Результат</th>
                </tr>
                { props.entries.map((e)=>{
                    return <Entry x={e.x} y={e.y} r={e.r} isEntry={e.isEntry}/> })}
            </table>
        </div>
    );
}

export default Table;