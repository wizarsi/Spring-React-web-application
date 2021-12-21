import {connect} from "react-redux";
import Table from "./Table";
import { getEntries} from "../../../redux/reducers/entriesReducer";

function mapStateToProps(state){
    return {
        entries: state.entriesData.entries
    };

}

function mapDispatchToProps(dispatch) {
    return (
        {
            getDataOfEntries: () => dispatch(getEntries()),
        }
    )
}


export default connect(mapStateToProps,mapDispatchToProps)(Table)