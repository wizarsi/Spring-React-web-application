import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";
import {register, setErrorMessage} from "../../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        userIsLogged: state.auth.userIsLogged,
        errorMessage: state.auth.errorMessage
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            register: (username,password) => dispatch(register(username,password)),
            setErrorMessage: (value) => dispatch(setErrorMessage(value))
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)