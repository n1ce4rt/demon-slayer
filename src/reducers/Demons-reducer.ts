import {demonsAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";
import {
    actionType,
    changeDemonACType, deleteDemonACType,
    demonType,
    getDemonsACType,
    initialStateType
} from "../types/Demons_reducer_types";
import {setCurrentPageACType} from "../types/Heroes_reducer_types";

const GET_DEMONS = 'GET_DEMONS'
const DELETE_DEMON = 'DELETE_DEMON'
const CHANGE_DEMON = 'CHANGE_DEMON'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState: initialStateType = {
    demons: [],
    currentPage: 1,
    totalDemons: 7
}

export const demons_reducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "GET_DEMONS":
            return {...state, demons: action.demons}
        case "DELETE_DEMON":
            return {...state, demons: state.demons.filter(demon => demon.id !== action.demonId)}
        case "CHANGE_DEMON":
            return {
                ...state,
                demons: state.demons.map((demon: demonType) => demon.id === action.demonId ?
                    {
                        ...demon,
                        age: action.age,
                        ['date of birth']: action.birthday,
                        growth: action.growth,
                        weight: action.weight,
                        status: action.status,
                    } :
                    {...demon})
            }
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        default:
            return state
    }
}
export const setCurrentPageAC = (page:number): setCurrentPageACType  => ({type: SET_CURRENT_PAGE, page})
export const getDemonsAC = (demons: Array<demonType>): getDemonsACType => ({type: GET_DEMONS, demons} as const)
export const deleteDemonAC = (demonId: string): deleteDemonACType => ({type: DELETE_DEMON, demonId} as const)
export const changeDemonAC = (demonId: string, age: string, birthday: string, growth: string, weight: string, status: string): changeDemonACType => ({
    type: CHANGE_DEMON,
    demonId,
    age,
    birthday,
    growth,
    weight,
    status
} as const)

export const getDemonsTC = (limit: number, page: number) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    demonsAPI.getDemons(limit, page).then((response) => {
        dispatch(setCurrentPageAC(page))
        dispatch(getDemonsAC(response))
        dispatch(setStatusAC('nice'))
    })
}

export const changeDemonTC = (demonId: string, age: string, birthday: string, growth: string, weight: string, status: string) => (dispatch: Dispatch) => {
    demonsAPI.changeDemon(demonId, age, birthday, growth, weight, status)
    dispatch(changeDemonAC(demonId, age, birthday, growth, weight, status))
}
export const deleteDemonTC = (demonId: string) => (dispatch: Dispatch) => {
    demonsAPI.deleteDemon(demonId)
}
