import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {login, setErrorMessage} from "../../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        userIsLogged: state.auth.userIsLogged,
        errorMessage: state.auth.errorMessage
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            login: (username,password) => dispatch(login(username,password)),
            setErrorMessage: (value) => dispatch(setErrorMessage(value))
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)