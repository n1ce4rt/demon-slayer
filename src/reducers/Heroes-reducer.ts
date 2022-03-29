import {heroesAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";
import {
    actionType, changeHeroACType,
    deleteHeroACType,
    getHeroesACType,
    heroType,
    initialStateType, setCurrentPageACType
} from "../types/Heroes_reducer_types";

const GET_HEROES = 'GET_HEROES'
const DELETE_HERO = 'DELETE_HERO'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_HERO = 'CHANGE_HERO'


const initialState: initialStateType = {
    heroes: [],
    currentPage: 1,
    totalHeroes: 20
}

export const heroes_reducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "GET_HEROES":
            return {...state, heroes: action.heroes}
        case "DELETE_HERO":
            return {...state, heroes: state.heroes.filter(hero => hero.id !== action.heroId)}
        case "CHANGE_HERO":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ?
                    {...hero,
                    age: action.age,
                    ['date of birth']: action.birthday,
                    growth: action.growth,
                    weight: action.weight,
                    status: action.status,
                    } :
                    {...hero})}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        default:
            return state
    }
}
export const setCurrentPageAC = (page:number): setCurrentPageACType  => ({type: SET_CURRENT_PAGE, page})
export const getHeroesAC = (heroes: Array<heroType>): getHeroesACType => ({type: GET_HEROES, heroes} as const)
export const deleteHeroAC = (heroId: string): deleteHeroACType => ({type: DELETE_HERO, heroId} as const)
export const changeHeroAC = (heroId: string, age: string, birthday: string , growth: string, weight: string, status: string): changeHeroACType => ({type: CHANGE_HERO, heroId, age, birthday, growth, weight, status} as const)

export const getHeroesTC = (limit: number, page: number) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    heroesAPI.getHeroes(limit, page).then((response) => {
        debugger
        dispatch(getHeroesAC(response))
        dispatch(setCurrentPageAC(page))
        dispatch(setStatusAC('nice'))
    })
}
export const searchHeroTC = (name: string) => (dispatch: Dispatch) => {
    heroesAPI.searchHero(name).then((response) => {
        dispatch(getHeroesAC(response))
    })
}
export const changeHeroTC = (heroId: string, age: string, birthday: string , growth: string, weight: string, status: string) => (dispatch: Dispatch) => {
    heroesAPI.changeHero(heroId, age, birthday, growth, weight, status)
    dispatch(changeHeroAC(heroId, age, birthday, growth, weight, status))
}


export const createNewHeroTC = (heroId: string, name: string, race: string, gender: string, age: string, birthday: string, growth: string, weight: string, utensils: string, style: string, status: string, img: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    heroesAPI.createHero(heroId, name, race, gender, age, birthday, growth, weight, utensils, style, status, img).
    then(()=>dispatch(setStatusAC('nice')))

}

export const deleteHeroTC = (heroId: string) => (dispatch: Dispatch) => {
    heroesAPI.deleteHero(heroId)
}


