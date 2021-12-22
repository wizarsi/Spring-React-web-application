import React, {useRef, useState} from 'react';

import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

import styles from "./Check.module.css"
import {Toast} from "primereact/toast";


const Check = (props) => {
    const toastRef = useRef();
    const [action, setAction] = useState(undefined)
    const handleSubmit = (event) => {
        event.preventDefault()
        switch (action) {
            case "check":
                handleSend()
                break
            case "clear":
                props.clearEntries();
                break
        }
    }

    const handleSend = () => {
        let message = undefined
        if (!props.selectedX && props.selectedX!==0) {
            message = "X is required"
        } else if (!props.selectedY) {
            message = "Y is required"
        } else if (!props.selectedR && props.selectedR!==0) {
            message = "R is required"
        } else {
            if (checkRange()) {
                props.checkEntry();
                if (props.errorMessage) {
                    message = props.errorMessage
                }
                props.setErrorMessage(undefined)
            }
        }
        if (message) {
            toastRef.current.show({severity: "error", summary: "Error", detail: message})
        }
    }

    const checkRange = () => {
        let message = undefined
        if (!props.xValues.filter(v => v === props.selectedX)[0]&& props.selectedX!==0) {
            message = "X out of range"
        } else if (isNaN(props.selectedY)) {
            message = "Y should be number"
        } else if (!(props.selectedY < props.yMax && props.selectedY > props.yMin)) {
            message = "Y out of range"
        } else if (props.selectedR <= 0) {
            message = "R cannot be negative or 0"
        } else if (!props.rValues.filter(v => v === props.selectedR)[0]) {
            message = "R out of range"
        }
        if (message) {
            toastRef.current.show({severity: "error", summary: "Error", detail: message})
            return false
        }
        return true
    }

    const setCheckAction = () => {
        setAction("check")
    }

    const setClearAction = () => {
        setAction("clear")
    }


    const changeX = (event) => {
        props.selectX(event.target.value)
    }

    const changeY = (event) => {
        props.selectY(event.target.value)
    }

    const changeR = (event) => {
        props.selectR(event.target.value)
    }

    return (
        <div>
            <Toast ref={toastRef}/>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <Dropdown name="x" id="x"
                              value={props.selectedX} options={props.xValues}
                              onChange={changeX} placeholder="Select x" emp/>
                </div>
                <br/>
                <div>
                    <InputText
                        placeholder="(-3...3)" name="y" value={props.selectedY} id="y"
                        type="input" onChange={changeY}
                    />
                </div>
                <br/>
                <div>
                    <Dropdown name="r" id="r"
                              value={props.selectedR} options={props.rValues}
                              onChange={changeR} placeholder="Select r"/>
                </div>
                <br/>
                <div>
                    <Button className={styles.button} onClick={setCheckAction} label="Check"/>
                    <Button className={styles.button} onClick={setClearAction} label="Clear results"/>
                </div>


            </form>
        </div>

    );
}

export default Check;