import {connect} from "react-redux";
import Graph from "./Graph";
import {checkEntry, selectX, selectY} from "../../../redux/reducers/sendFormReducer";
import {setErrorMessage} from "../../../redux/reducers/authReducer";

function mapStateToProps(state){
    return {
        selectedX: state.sendForm.selectedX,
        selectedY: state.sendForm.selectedY,
        selectedR: state.sendForm.selectedR,
        yMax: state.sendForm.yMax,
        yMin: state.sendForm.yMin,
        xValues: state.sendForm.xValues,
        entries: state.entriesData.entries,
        errorMessage: state.auth.errorMessage
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            selectX: (value)=>dispatch(selectX(value)),
            selectY: (value)=>dispatch(selectY(value)),
            checkEntry: ()=>dispatch(checkEntry()),
            setErrorMessage: (value) => dispatch(setErrorMessage(value))
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(Graph)