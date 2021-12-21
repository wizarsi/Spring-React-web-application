import authReducer from "./reducers/authReducer";
import sendFormReducer from "./reducers/sendFormReducer";
import entriesReducer from "./reducers/entriesReducer";

const {combineReducers} = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    sendForm: sendFormReducer,
    entriesData: entriesReducer,

})

export default reducer