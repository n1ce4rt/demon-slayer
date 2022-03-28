import axios from "axios";
import {heroType} from "../types/Heroes_reducer_types";
import {initialAuthStateType} from "../reducers/Auth-reducer";
import {demonType} from "../types/Demons_reducer_types";



const instance = axios.create(
    {
        baseURL: 'http://localhost:3001/',
        withCredentials: true,
    }
)

export const demonsAPI = {

    getDemons(limit: number, page: number) {
        return instance.get<demonType[]>(`demons?_limit=${limit}&_page=${page}`).then((response) => response.data)
    },
    deleteDemon(demonId: string) {
        return instance.delete(`demons/${demonId}`)
    },
    changeDemon(demonId: string, age: string, birthday: string, growth: string, weight: string, status: string ) {
        return instance.patch(`demons/${demonId}`, {"age" : `${age}`, "date of birth" : `${birthday}`, "growth" : `${growth}`, "weight" : `${weight}`, "status": `${status}`})
    }
}

export  const heroesAPI = {
    getHeroes(limit: number, page: number) {
        return instance.get<heroType[]>(`characters?_limit=${limit}&_page=${page}`).then((response)  => response.data)
    },
    searchHero (name: string) {
        return instance.get<heroType[]>(`characters?name=${name}`).then((response) => response.data)
    },
    createHero (heroId: string, name: string, race: string, gender: string, age: string, birthday: string, growth: string, weight: string, utensils: string, style: string, status: string, img: string) {
        return instance.post('characters', {
                "id": `${heroId}`,
                "name": `${name}`,
                "race": `${race}`,
                "gender": `${gender}`,
                "age": `${age} лет`,
                "date of birth": `${birthday}`,
                "growth": `${growth} см`,
                "weight": `${weight} кг`,
                "utensils": `${utensils}`,
                "style": `${style}`,
                "status": `${status}`,
                "img": `${img}`,
        })
    },
    deleteHero(heroId: string) {
        return instance.delete(`characters/${heroId}`)
    },
    changeHero(heroId: string, age: string, birthday: string, growth: string, weight: string, status: string ) {
        return instance.patch(`characters/${heroId}`, {"age" : `${age}`, "date of birth" : `${birthday}`, "growth" : `${growth}`, "weight" : `${weight}`, "status": `${status}`})
    }
}

export const authAPI = {
    auth() {
        return instance.get<initialAuthStateType>('auth').then((response) => response.data)
    },
    authMe(login: string, password: string, auth: boolean) {
        return instance.post('auth',{"login" : login, "password" : password, "isAuth" : auth})
    }
}