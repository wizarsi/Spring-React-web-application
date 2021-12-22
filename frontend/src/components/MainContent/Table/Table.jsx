import React, {useEffect} from 'react';
import styles from "./Table.module.css"
import Entry from "./Entry/Entry";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const Table = (props) => {
    useEffect(()=>{
        props.getDataOfEntries()

    },[])
    const columns = [
        {field: 'x', header: 'X'},
        {field: 'y', header: 'Y'},
        {field: 'r', header: 'R'},
        {field: 'dateTime', header: 'Время'},
    ];
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });
    const entryToText = (rowData) => {
        return <span>{rowData.entry?"Поподание":"Промах"}</span>;
    }
    return (
        <div className={styles.tableContainer}>
            <DataTable value={props.entries} responsiveLayout="scroll">
                {dynamicColumns}
                <Column key="entry" field="entry" body={entryToText} header="Результат" />
            </DataTable>
        </div>
    );
}

export default Table;