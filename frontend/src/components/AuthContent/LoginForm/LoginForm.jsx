import React from 'react';
import {Navigate, NavLink} from "react-router-dom";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const LoginForm = (props) => {
    const [formValue, setFormValue] = React.useState({
        username: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(formValue.username,formValue.password);
    }

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value})
    }
    if(props.userIsLogged){
        return <Navigate to={"/main"}/>
    }
    return (
        <form onSubmit={handleSubmit}>
            <MyInput  placeholder="username" name = "username" value={formValue.username} id="username" type="text" onChange={handleChange}/>
            <MyInput  placeholder="password" name = "password" value={formValue.password} id="password" type="password" onChange={handleChange}/>
            <MyButton>Send</MyButton>
            <div><NavLink to={"/register"}>creat new account</NavLink></div>
        </form>
    );
}

export default LoginForm;