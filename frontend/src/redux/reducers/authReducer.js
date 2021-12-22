import authAPI from "../../API/authAPI";

const SET_USER_IS_LOGGED = "SET_USER_IS_LOGGED"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"

const initialState = {
    userIsLogged: false,
    errorMessage: undefined
}


export function setUserIsLogged(value) {
    return ({
        type: SET_USER_IS_LOGGED,
        value
    })
}

export function setErrorMessage(value) {
    return ({
        type: SET_ERROR_MESSAGE,
        value
    })
}

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_USER_IS_LOGGED:
            return ({
                ...state,
                userIsLogged: action.value
            })
        case SET_ERROR_MESSAGE:
            return ({
                ...state,
                errorMessage: action.value
            })
        default:
            return state
    }
}

export const login = (username, password) => (dispatch) => {
    authAPI.login(username, password)
        .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("userRSWebLab4", JSON.stringify(response.data))
                    dispatch(setUserIsLogged(true))
                } else {
                    console.log("Ошибка авторизации с кодом " + response.status)
                }
            }
        ).catch(error => {

        if (JSON.parse(JSON.stringify(error)).status === 400) {
            dispatch(setErrorMessage(error.response.data))
        } else {
            console.log("Ошибка авторизации с кодом " + error.status)
        }

    })
}

export const register = (username, password) => (dispatch) => {
    authAPI.register(username, password)
        .then(response => {
                if (response.status === 200) {
                    dispatch(login(username, password))
                } else {
                    console.log("Ошибка авторизации с кодом " + response.status)
                }
            }
        ).catch(error => {
            if (JSON.parse(JSON.stringify(error)).status === 400) {
                dispatch(setErrorMessage(error.response.data))
            } else {
                console.log("Ошибка авторизации с кодом " + error.status)
            }
        }
    )
}

export const logout = () => {
    localStorage.removeItem('userRSWebLab4');
}