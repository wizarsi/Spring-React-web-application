import {connect} from "react-redux";
import Check from "./Check";
import {checkEntry, selectR, selectX, selectY} from "../../../redux/reducers/sendFormReducer";

function mapStateToProps(state){
    return {
        selectedX: state.entries.selectedX,
        selectedY: state.entries.selectedY,
        selectedR: state.entries.selectedR,
        xValues: state.entries.xValues,
        yMax: state.entries.yMax,
        yMin: state.entries.yMin,
        rValues: state.entries.rValues
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            checkEntry: () => dispatch(checkEntry()),
            selectX:(value)=>dispatch(selectX(value)),
            selectY:(value)=>dispatch(selectY(value)),
            selectR:(value)=>dispatch(selectR(value)),
        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(Check)