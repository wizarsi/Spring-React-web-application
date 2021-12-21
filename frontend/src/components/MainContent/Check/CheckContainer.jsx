import {connect} from "react-redux";
import Check from "./Check";
import {checkEntry, clearEntries, selectR, selectX, selectY} from "../../../redux/reducers/sendFormReducer";

function mapStateToProps(state){
    return {
        selectedX: state.sendForm.selectedX,
        selectedY: state.sendForm.selectedY,
        selectedR: state.sendForm.selectedR,
        xValues: state.sendForm.xValues,
        yMax: state.sendForm.yMax,
        yMin: state.sendForm.yMin,
        rValues: state.sendForm.rValues
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            checkEntry: () => dispatch(checkEntry()),
            selectX:(value)=>dispatch(selectX(value)),
            selectY:(value)=>dispatch(selectY(value)),
            selectR:(value)=>dispatch(selectR(value)),
            clearEntries: () => dispatch(clearEntries())
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(Check)