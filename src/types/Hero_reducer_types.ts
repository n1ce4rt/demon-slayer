export type actionType = getHeroesACType | deleteHeroACType | changeAgeACType | setCurrentPageACType | changeBirthdayACType | changeGrowthACType | changeWeightACType | changeStatusACType


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