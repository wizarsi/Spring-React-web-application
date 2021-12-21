import entriesAPI from "../../API/entriesAPI";

const SELECT_X = "SELECT_X"
const SELECT_Y = "SELECT_Y"
const SELECT_R = "SELECT_R"

const initialState = {
    selectedX: undefined,
    selectedY: undefined,
    selectedR: 1,
    xValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
    yMax: 3,
    yMin: -3,
    rValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
}


export function selectX(value) {
    return ({
        type: SELECT_X,
        value
    })
}

export function selectY(value) {
    return ({
        type: SELECT_Y,
        value
    })
}

export function selectR(value) {
    return ({
        type: SELECT_R,
        value
    })
}

export default function sendFormReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SELECT_X:
            return ({
                ...state,
                selectedX: action.value
            })
        case SELECT_Y:
            return ({
                ...state,
                selectedY: action.value
            })
        case SELECT_R:
            return ({
                ...state,
                selectedR: action.value
            })
        default:
            return state
    }
}

export const checkEntry = () => (dispatch,getState) => {
    const token = JSON.parse(localStorage.getItem("userRSWebLab4")).token

    entriesAPI.checkEntry(getState().sendForm.selectedX,
        getState().sendForm.selectedY, getState().sendForm.selectedR, token)
        .then(response => {
                if (response.status === 200) {
                } else {
                    console.log("Ошибка авторизации с кодом " + response.status)
                }
            }
        ).catch(response => console.log("Ошибка авторизации с кодом " + response.status))
}
