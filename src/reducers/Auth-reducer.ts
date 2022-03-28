import {authAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";


export type initialAuthStateType = {
    login: string | null
    password: string | null
    isAuth: boolean | null
    error: string | undefined
}
const initialAuthState: initialAuthStateType = {
    login: null,
    password: null,
    isAuth: false,
    error: undefined
}

export const auth_reducer = (state: initialAuthStateType = initialAuthState, action: authMeACType | logOutACType): initialAuthStateType => {

    switch (action.type) {

        case "AUTH_ME":
            return {...state,  login: action.login, isAuth: action.isAuth, password: action.password, error: action.error}
        case "LOG_OUT":
            return {...state, isAuth: false, login: null, password: null}
        default:
            return state
    }


}
export type authMeACType = {
    type: 'AUTH_ME'
    login: string | null
    password: string | null
    isAuth: boolean | null
    error?: string | undefined
}
export type logOutACType = {
    type: 'LOG_OUT'
}
export const authMeAC = (login: string | null, password: string | null, isAuth: boolean | null, error?: string | undefined): authMeACType => ({type: 'AUTH_ME', login, password, isAuth, error} as const)
export const logOutAC = (): logOutACType  => ({type: 'LOG_OUT'} as const)

export const authMeTC = (login: string, password: string, isAuth: boolean) => {
    return (dispatch: Dispatch) => {
            dispatch(setStatusAC('loading'))
    authAPI.authMe(login, password, isAuth).then((response) => {

        authAPI.auth().then((response) => {
            if (response.login !== null && response.login === 'Arthur') {
                dispatch(authMeAC(response.login, response.password, response.isAuth))
                dispatch(setStatusAC('nice'))
            } else {
                dispatch(authMeAC('', '', false, 'Неправильный логин или пароль!'))
                dispatch(setStatusAC("nice"))
            }

        });
    })



    }
}
