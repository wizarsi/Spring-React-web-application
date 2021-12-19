import React from 'react';
import MyComboBox from "../../UI/combobox/MyComboBox";

const Check = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        props.checkEntry();
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
            <input placeholder="(-3...3)" name = "y" value={props.selectedY} id="y"
                   type="input" onChange={changeY} />
            <MyComboBox onChange={changeR} value={props.selectedR} name = "r" id="r"  options={props.rValues}/>
            <button  type="submit">Send</button>
        </form>
    );
}

export default Check;