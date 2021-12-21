import {connect} from "react-redux";
import Table from "./Table";

function mapStateToProps(state){
    return {
        entries: state.entries.entries
    };

}


export default connect(mapStateToProps,null)(Table)