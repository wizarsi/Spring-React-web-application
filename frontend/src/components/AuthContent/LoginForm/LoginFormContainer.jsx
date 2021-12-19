import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {login} from "../../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        userIsLogged: state.auth.userIsLogged
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            login: (username,password) => dispatch(login(username,password)),
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)