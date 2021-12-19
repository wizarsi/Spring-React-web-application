import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";
import {register} from "../../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        userIsLogged: state.auth.userIsLogged
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            register: (username,password) => dispatch(register(username,password)),
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)