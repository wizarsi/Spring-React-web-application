import React, {useRef} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import styles from "./RegisterForm.module.css";
import {Toast} from "primereact/toast";


const RegisterForm = (props) => {
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
            props.register(formValue.username, formValue.password);
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
        <div className={styles.registerFormContainer}>
            <Toast ref={toastRef}/>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div>
                        <InputText style={{
                            width: "80%",
                            margin: "0 10%"
                        }}
                                   value={formValue.username}
                                   onChange={handleChange}
                                   name="username"
                                   id="username"
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
                              feedback={true}
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
                            label="Register"/>
                </div>

                <br/>
                <div className={styles.signBackText}><NavLink to={"/login"} className={styles.signBackText}>back</NavLink></div>
            </form>
        </div>
    );
}

export default RegisterForm;