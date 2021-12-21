import authAPI from "../../API/authAPI";
import {getDataOfEntries} from "./entriesReducer";

const SET_USER_IS_LOGGED  = "SET_USER_IS_LOGGED"

const initialState = {
    userIsLogged:false,
}


export function setUserIsLogged(value){
    return({type: SET_USER_IS_LOGGED,
        value
    })
}

export default function authReducer(state=initialState, action={}){
    switch (action.type){
        case SET_USER_IS_LOGGED:
            return({
                ...state,
                userIsLogged: action.value})
        default:
            return state
    }
}

export const login = (username,password)=>(dispatch)=>{
    authAPI.login(username, password)
        .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("userRSWebLab4", JSON.stringify(response.data))
                    dispatch(setUserIsLogged(true))
                    dispatch(getDataOfEntries())
                } else {
                    console.log("Ошибка авторизации с кодом "+response.status)
                }
            }
        ).catch(response=>console.log("Ошибка авторизации с кодом "+response.status))
}

export const register = (username,password)=>(dispatch)=>{
    authAPI.register(username, password)
        .then(response => {
                if (response.status === 200) {
                    dispatch(login(username,password))
                } else {
                    console.log("Ошибка авторизации с кодом "+response.status)
                }
            }
        ).catch(response=>console.log("Ошибка авторизации с кодом "+response.status))
}

export const logout = ()=> {
    localStorage.removeItem('userRSWebLab4');
}