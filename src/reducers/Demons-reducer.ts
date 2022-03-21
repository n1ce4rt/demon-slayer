
import {demonsAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";

const GET_DEMONS = 'GET_DEMONS'
const DELETE_DEMON = 'DELETE_DEMON'
export type demonType = {
    id: number
    name: string
    race: string
    gender: string
    age: number
    "date of birth": string
    growth: string
    weight: string
    status: string
    img: string
}

export type initialStateType = {
    demons: Array<demonType>
}
const initialState: initialStateType= {
    demons: []
}

export const demons_reducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "GET_DEMONS":
            return {...state, demons: action.demons}
        case "DELETE_DEMON":
            return {...state, demons: state.demons.filter(demon => demon.id !== action.demonId)}
        default:
            return state
    }
}
const getDemonsAC = (demons: Array<demonType>): getDemonsACType => ({type: GET_DEMONS, demons} as const)
export const deleteDemonAC = (demonId: number):deleteDemonACType => ({type: DELETE_DEMON, demonId} as const)
export const getDemonsTC = () => {

    return (dispatch: Dispatch) => {
            dispatch(setStatusAC('loading'))
        demonsAPI.getDemons().then((response) => {

            dispatch(getDemonsAC(response))
            dispatch(setStatusAC('nice'))
        })
    }
}
export type actionType = getDemonsACType | deleteDemonACType

export type getDemonsACType = {
    type: 'GET_DEMONS'
    demons: Array<demonType>
}
export type deleteDemonACType = {
    type: 'DELETE_DEMON'
    demonId: number
}