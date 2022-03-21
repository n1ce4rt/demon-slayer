import {heroesAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";

const GET_HEROES = 'GET_HEROES'
const DELETE_HERO = 'DELETE_HERO'
const CHANGE_AGE = 'CHANGE_AGE'
export type heroType = {
    id: number
    name: string
    race: string
    gender: string
    age: number | string
    "date of birth": string
    growth: string
    weight: string
    style: string
    utensils: string
    status: string
    img: string

}

export type initialStateType = {
    heroes: Array<heroType>
}
const initialState: initialStateType = {
    heroes: []
}

export const heroes_reducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case "GET_HEROES":
            return {...state, heroes: action.heroes}
        case "DELETE_HERO":
            return {...state, heroes: state.heroes.filter(hero => hero.id !== action.heroId)}
        case "CHANGE_AGE":
            debugger
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    age: action.age
                } : {...hero})
            }
        default:
            return state
    }
}
const getHeroesAC = (heroes: Array<heroType>): getHeroesACType => ({type: GET_HEROES, heroes} as const)
export const deleteHeroAC = (heroId: number): deleteHeroACType => ({type: DELETE_HERO, heroId} as const)
export const changeAgeAC = (heroId: number, age: number | string) => ({type: CHANGE_AGE, heroId, age} as const)

export const getHeroesTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    heroesAPI.getHeroes(10).then((response) => {
        dispatch(getHeroesAC(response))
        dispatch(setStatusAC('nice'))
    })

}

export const createNewHeroTC = () => (dispatch: Dispatch) => {
    heroesAPI.getHeroes(5).then((response) => {
        dispatch(getHeroesAC(response))
        dispatch(setStatusAC('nice'))
    })
    // heroesAPI.createHero('Bhf', 'https://sun9-76.userapi.com/impg/aq9bQBXYkQK521HqkrO3vx44ovU_CTruT24q3Q/uuBDqNcSDCc.jpg?size=1620x2160&quality=96&sign=88c0161ab67954e3ab9dc45b5e046f80&type=album', 110)
}
export type actionType = getHeroesACType | deleteHeroACType | changeAgeACType

export type getHeroesACType = {
    type: 'GET_HEROES'
    heroes: Array<heroType>
}
export type deleteHeroACType = {
    type: 'DELETE_HERO'
    heroId: number
}
export type changeAgeACType = {
    type: 'CHANGE_AGE'
    heroId: number
    age: number | string
}