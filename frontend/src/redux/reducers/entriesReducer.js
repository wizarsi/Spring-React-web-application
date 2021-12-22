import entriesAPI from "../../API/entriesAPI";
import {logout} from "./authReducer";

const DELETE_ENTRIES = "DELETE_ENTRIES"
const ADD_ENTRY = "ADD_ENTRY"
const SET_ENTRIES = "SET_ENTRIES"

const initialState = {
    entries: []
}


export function addEntry(value) {
    return ({
        type: ADD_ENTRY,
        value
    })
}

export function deleteEntries() {
    return ({
        type: DELETE_ENTRIES
    })
}

export function setEntries(value) {
    return ({
        type: SET_ENTRIES,
        value
    })
}

export default function entriesReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_ENTRY:
            return ({
                ...state,
               entries:[...state.entries,action.value]
            })
        case DELETE_ENTRIES:
            return ({
                ...state,
                entries: []
            })
        case SET_ENTRIES:
            return ({
                ...state,
                entries: action.value
            })
        default:
            return state
    }
}

export const getEntries = () => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("userRSWebLab4")).token

    entriesAPI.getEntriesRequest(token)
        .then(response => {
                if (response.status === 200) {
                    /*response.data.forEach(e => {
                        e.entry = e.entry?"Поподание":"Промах";
                    })*/
                    dispatch(setEntries(response.data))
                } else if(response.status === 401) {
                    dispatch(logout())
                }else{
                    console.log("Ошибка с кодом " + response.status)
                }
            }
        )
}
