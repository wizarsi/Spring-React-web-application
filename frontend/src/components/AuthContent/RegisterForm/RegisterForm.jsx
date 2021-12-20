import React from 'react';
import {Navigate} from "react-router-dom";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";


const RegisterForm = (props) => {
    const [formValue, setFormValue] = React.useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        props.register(formValue.username,formValue.password);
    }

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value})
    }

    if(props.userIsLogged){
        return <Navigate to={"/main"}/>
    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput placeholder="username" name = "username" value={formValue.username} id="username" type="text" onChange={handleChange}/>
            <MyInput placeholder="password" name = "password" value={formValue.password} id="password" type="password" onChange={handleChange}/>
            <MyButton>Send</MyButton>
        </form>
    );
}

export default RegisterForm;