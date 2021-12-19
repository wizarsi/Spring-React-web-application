import authReducer from "./reducers/authReducer";
import entriesReducer from "./reducers/entriesReducer";

const {combineReducers} = require("redux");

const reducer = combineReducers({
    auth: authReducer,
    entries: entriesReducer
})

export default reducer