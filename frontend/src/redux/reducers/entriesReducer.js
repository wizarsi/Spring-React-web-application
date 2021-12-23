import entriesAPI from "../../API/entriesAPI";
import {logout} from "./authReducer";

const DELETE_ENTRIES = "DELETE_ENTRIES"
const ADD_ENTRY = "ADD_ENTRY"
const SET_ENTRIES = "SET_ENTRIES"
const SET_ENTRIES_FOR_GRAPH = "SET_ENTRIES_FOR_GRAPH"
const ADD_ENTRY_FOR_GRAPH = "ADD_ENTRY_FOR_GRAPH"
const DELETE_ENTRIES_FOR_GRAPH = "DELETE_ENTRIES_FOR_GRAPH"


const initialState = {
    entries: [],
    entriesForGraph:[]

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


export function setEntriesForGraph(value) {
    return ({
        type: SET_ENTRIES_FOR_GRAPH,
        value
    })
}

export function addEntryForGraph(value) {
    return ({
        type: ADD_ENTRY_FOR_GRAPH,
        value
    })
}

export function deleteEntriesForGraph() {
    return ({
        type: DELETE_ENTRIES_FOR_GRAPH
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
            return  ({
                ...state,
                entries: action.value
            })
        case SET_ENTRIES_FOR_GRAPH:
            return ({
                ...state,
                entriesForGraph: action.value
            })
        case ADD_ENTRY_FOR_GRAPH:
            return ({
                ...state,
                entriesForGraph:[...state.entriesForGraph,action.value]
            })
        case DELETE_ENTRIES_FOR_GRAPH:
            return ({
                ...state,
                entriesForGraph: []
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
                    dispatch(setEntries(response.data))
                } else if(response.status === 401) {
                    dispatch(logout())
                }else{
                    console.log("Ошибка с кодом " + response.status)
                }
            }
        )
}

export const getEntriesForGraph = () => (dispatch,getState) => {
    const token = JSON.parse(localStorage.getItem("userRSWebLab4")).token
    entriesAPI.getEntriesForGraphRequest(getState().sendForm.selectedR,token)
        .then(response => {
                if (response.status === 200) {
                    dispatch(setEntriesForGraph(response.data))
                } else if(response.status === 401) {
                    dispatch(logout())
                }else{
                    console.log("Ошибка с кодом " + response.status)
                }
            }
        )
}

