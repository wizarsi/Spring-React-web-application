import React, {useState} from 'react';

import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

import styles from "./Check.module.css"


const Check = (props) => {
    const [action,setAction] = useState(undefined)
    const handleSubmit = (event) => {
        event.preventDefault()
        switch (action) {
            case "check":
                props.checkEntry();
                break
            case "clear":
                props.clearEntries();
                break
        }
    }

    const setCheckAction=()=>{
        setAction("check")
    }

    const setClearAction=()=>{
        setAction("clear")
    }


    const changeX = (event)=>{
        props.selectX(event.target.value)
    }

    const changeY = (event)=>{
        props.selectY(event.target.value)
    }

    const changeR = (event)=>{
        props.selectR(event.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <Dropdown name = "x" id="x"
                          value={props.selectedX} options={props.xValues}
                          onChange={changeX} placeholder="Select x"/>
            </div>
            <br/>
            <div>
                <InputText
                    placeholder="(-3...3)" name = "y" value={props.selectedY} id="y"
                    type="input" onChange={changeY}
                />
            </div>
           <br/>
            <div>
                <Dropdown name = "r" id="r"
                          value={props.selectedR} options={props.rValues}
                          onChange={changeR} placeholder="Select r"/>
            </div>
           <br/>
            <div>
                <Button className={styles.button} onClick={setCheckAction} label="Check"/>
                <Button className={styles.button} onClick={setClearAction} label="Clear results"/>
            </div>


        </form>
    );
}

export default Check;