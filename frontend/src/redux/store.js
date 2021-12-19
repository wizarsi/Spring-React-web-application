import reducer from "./reducer";
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";

const store = createStore(reducer, applyMiddleware(thunk))

export default store