import React from 'react';
import {Navigate} from "react-router-dom";


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
            <input placeholder="username" name = "username" value={formValue.username} id="username" type="text" onChange={handleChange} />
            <input placeholder="password" name = "password" value={formValue.password} id="password" type="password" onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    );
}

export default RegisterForm;