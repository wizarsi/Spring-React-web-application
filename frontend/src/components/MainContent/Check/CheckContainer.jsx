import {connect} from "react-redux";
import Check from "./Check";
import {checkEntry, clearEntries, selectR, selectX, selectY} from "../../../redux/reducers/sendFormReducer";
import {setErrorMessage} from "../../../redux/reducers/authReducer";
import {
    addEntry,
    addEntryForGraph,
    deleteEntriesForGraph,
    getEntriesForGraph
} from "../../../redux/reducers/entriesReducer";

function mapStateToProps(state){
    return {
        selectedX: state.sendForm.selectedX,
        selectedY: state.sendForm.selectedY,
        selectedR: state.sendForm.selectedR,
        xValues: state.sendForm.xValues,
        yMax: state.sendForm.yMax,
        yMin: state.sendForm.yMin,
        rValues: state.sendForm.rValues,
        errorMessage: state.auth.errorMessage
    };

}

function mapDispatchToProps(dispatch){
    return(
        {
            checkEntry: () => dispatch(checkEntry()),
            selectX:(value)=>dispatch(selectX(value)),
            selectY:(value)=>dispatch(selectY(value)),
            selectR:(value)=>dispatch(selectR(value)),
            clearEntries: () => dispatch(clearEntries()),
            setErrorMessage: (value) => dispatch(setErrorMessage(value)),
            getEntriesForGraph:()=> dispatch(getEntriesForGraph()),
            clearEntriesForGraph: () => dispatch(deleteEntriesForGraph()),
            addEntryForGraph: () => dispatch(addEntryForGraph()),


        }
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(Check)