import {heroesAPI} from "../api/Api";
import {setStatusAC} from "./App-reducer";
import {Dispatch} from "redux";

const GET_HEROES = 'GET_HEROES'
const DELETE_HERO = 'DELETE_HERO'
const CHANGE_AGE = 'CHANGE_AGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY'
const CHANGE_GROWTH = 'CHANGE_GROWTH'
const CHANGE_WEIGHT = 'CHANGE_WEIGHT'
const CHANGE_STATUS = 'CHANGE_STATUS'

export type heroType = {
    id: string
    name: string
    race: string
    gender: string
    age: string
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
    currentPage: number
    totalHeroes: number
}
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
        case "CHANGE_AGE":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    age: action.age
                } : {...hero})
            }
        case "CHANGE_BIRTHDAY":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    ['date of birth']: action.birthday
                } : {...hero})
            }
        case "CHANGE_GROWTH":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    growth: action.growth
                } : {...hero})
            }
        case "CHANGE_WEIGHT":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    weight: action.weight
                } : {...hero})
            }
        case "CHANGE_STATUS":
            return {...state,
                heroes: state.heroes.map((hero: heroType) => hero.id === action.heroId ? {
                    ...hero,
                    status: action.status
                } : {...hero})
            }
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        default:
            return state
    }
}
const setCurrentPageAC = (page:number) => ({type: SET_CURRENT_PAGE, page})
const getHeroesAC = (heroes: Array<heroType>): getHeroesACType => ({type: GET_HEROES, heroes} as const)
export const deleteHeroAC = (heroId: string): deleteHeroACType => ({type: DELETE_HERO, heroId} as const)
export const changeAgeAC = (heroId: string, age: string): changeAgeACType => ({type: CHANGE_AGE, heroId, age} as const)
export const changeBirthdayAC = (heroId: string, birthday: string): changeBirthdayACType => ({type: CHANGE_BIRTHDAY, heroId, birthday} as const)
export const changeGrowthAC = (heroId: string, growth: string): changeGrowthACType => ({type: CHANGE_GROWTH, heroId, growth} as const)
export const changeWeightAC = (heroId: string, weight: string): changeWeightACType => ({type: CHANGE_WEIGHT, heroId, weight} as const)
export const changeStatusAC = (heroId: string, status: string): changeStatusACType => ({type: CHANGE_STATUS, heroId, status} as const)


export const getHeroesTC = (limit: number, page: number) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    heroesAPI.getHeroes(limit, page).then((response) => {
        debugger
        dispatch(getHeroesAC(response))
        dispatch(setCurrentPageAC(page))
        dispatch(setStatusAC('nice'))
    })

}
export const searchHeroTK = (name: string) => (dispatch: Dispatch) => {
    debugger
    heroesAPI.searchHero(name).then((response) => {
            debugger
        dispatch(getHeroesAC(response))
    })
}
export const changeHeroTC = (heroId: string, age: number, birthday: string , growth: number, weight: number, status: string) => (dispatch: Dispatch) => {
    heroesAPI.changeHero(heroId, age, birthday, growth, weight, status )
}


export const createNewHeroTC = (heroId: string, name: string, race: string, gender: string, age: number, birthday: string, growth: number, weight: number, utensils: string, style: string, status: string, img: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    heroesAPI.createHero(heroId, name, race, gender, age, birthday, growth, weight, utensils, style, status, img).
    then(()=>dispatch(setStatusAC('nice')))

}

export const deleteHeroTC = (heroId: string) => (dispatch: Dispatch) => {
    heroesAPI.deleteHero(heroId)
}

export type actionType = getHeroesACType | deleteHeroACType | changeAgeACType | setCurrentPageACType | changeBirthdayACType | changeGrowthACType | changeWeightACType | changeStatusACType
export type setCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    page: number
}
export type getHeroesACType = {
    type: 'GET_HEROES'
    heroes: Array<heroType>
}
export type deleteHeroACType = {
    type: 'DELETE_HERO'
    heroId: string
}
export type changeAgeACType = {
    type: 'CHANGE_AGE'
    heroId: string
    age: string
}
export type changeBirthdayACType = {
    type: 'CHANGE_BIRTHDAY'
    heroId: string
    birthday: string
}
export type  changeGrowthACType = {
    type: 'CHANGE_GROWTH'
    heroId: string
    growth: string
}
export type changeWeightACType = {
    type: 'CHANGE_WEIGHT'
    heroId: string
    weight: string
}
export type changeStatusACType = {
    type: 'CHANGE_STATUS'
    heroId: string
    status: string
}