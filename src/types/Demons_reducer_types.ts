import {setCurrentPageACType} from "./Heroes_reducer_types";

export type demonType = {
    id: string
    name: string
    race: string
    gender: string
    age: string
    utensils: string
    "date of birth": string
    growth: string
    weight: string
    genus: string
    status: string
    img: string
}

export type initialStateType = {
    demons: Array<demonType>
    currentPage: number
    totalDemons: number
}


export type actionType = getDemonsACType | deleteDemonACType | changeDemonACType | setCurrentPageACType

export type getDemonsACType = {
    type: 'GET_DEMONS'
    demons: Array<demonType>
}
export type deleteDemonACType = {
    type: 'DELETE_DEMON'
    demonId: string
}
export type changeDemonACType = {
    type: 'CHANGE_DEMON'
    demonId: string
    age: string
    birthday: string
    growth: string
    weight: string
    status: string
}
