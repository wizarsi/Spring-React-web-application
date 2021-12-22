import {connect} from "react-redux";
import MyHeader from "./MyHeader"
import {logout} from "../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        userIsLogged: state.auth.userIsLogged
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            logout: () => dispatch(logout()),
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(MyHeader)