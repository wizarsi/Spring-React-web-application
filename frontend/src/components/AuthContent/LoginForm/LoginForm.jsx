import React, {useRef} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import styles from "./LoginForm.module.css"

import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import {Password} from "primereact/password";
import {Toast} from "primereact/toast";                                //icons


const LoginForm = (props) => {
    const [formValue, setFormValue] = React.useState({
        username: '',
        password: ''
    });

    const toastRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!formValue.username){
            toastRef.current.show({severity:"error", summary:"Error",detail:"Name is required"})
        }else if(!formValue.password){
            toastRef.current.show({severity:"error", summary:"Error",detail:"Password is required"})
        }else{
            props.login(formValue.username, formValue.password);
            if(props.errorMessage){
                toastRef.current.show({severity:"error", summary:"Error",detail:props.errorMessage})
            }
            props.setErrorMessage(undefined)
        }
    }

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value})
    }
    if (props.userIsLogged) {
        return <Navigate to={"/main"}/>
    }

    return (
        <div className={styles.loginFormContainer}>
            <Toast ref={toastRef}/>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div>
                    <InputText style={{
                        width: "80%",
                        margin: "0 10%"
                    }}
                               value={formValue.username}
                               onChange={handleChange}
                               name="username"
                               id="user-name"
                               placeholder="Name"
                    />
                </div>
                <br/>
                <div>
                    <Password style={{
                        width: "80%",
                        margin: "0 10%"
                    }}
                              toggleMask={true}
                              feedback={false}
                              value={formValue.password}
                              onChange={handleChange}
                              name="password"
                              placeholder="Password"
                    />
                </div>
                <br/>
                <div>
                    <Button style={{
                        width: "60%",
                        margin: "0 20%"
                    }}
                            label="Send"/>
                </div>

                <br/>
                <div className={styles.signRegister}><NavLink to={"/register"} className={styles.signRegisterText}>creat
                    new account</NavLink></div>

            </form>
        </div>

    );
}

export default LoginForm;