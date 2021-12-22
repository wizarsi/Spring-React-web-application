import React, {useState} from 'react';
import MyComboBox from "../../UI/combobox/MyComboBox";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

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
        <form onSubmit={handleSubmit}>
            <MyComboBox name = "x" id="x" onChange={changeX} value={props.selectedX} options={props.xValues}/>
            <MyInput placeholder="(-3...3)" name = "y" value={props.selectedY} id="y"
                     type="input" onChange={changeY}/>

            <MyComboBox onChange={changeR} value={props.selectedR} name = "r" id="r"  options={props.rValues}/>
            <MyButton onClick={setCheckAction}>Check</MyButton>
            <MyButton onClick={setClearAction}>Clear results</MyButton>
        </form>
    );
}

export default Check;