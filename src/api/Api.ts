import axios, {AxiosResponse} from "axios";
import {heroType} from "../types/Hero_reducer_types";
import {initialAuthStateType} from "../reducers/Auth-reducer";
import {demonType} from "../reducers/Demons-reducer";



const instance = axios.create(
    {
        baseURL: 'http://localhost:3001/',
        withCredentials: true,
    }
)

export const demonsAPI = {

    getDemons() {
        return instance.get(`demons`).then((response: AxiosResponse<demonType[]>) => response.data)
    },

}

export  const heroesAPI = {
    getHeroes(limit: number, page: number) {
        return instance.get(`characters?_limit=${limit}&_page=${page}`).then((response: AxiosResponse<heroType[]>)  => response.data)
    },
    searchHero (name: string) {
        return instance.get(`characters?name=${name}`).then((response: AxiosResponse<heroType[]>) => response.data)
    },
    createHero (heroId: string, name: string, race: string, gender: string, age: number, birthday: string, growth: number, weight: number, utensils: string, style: string, status: string, img: string) {
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
        debugger
        return instance.delete(`characters/${heroId}`)
    },
    changeHero(heroId: string, age: number, birthday: string, growth: number, weight: number, status: string ) {
        return instance.patch(`characters/${heroId}`, {"age" : `${age}`, "date of birth" : `${birthday}`, "growth" : `${growth}`, "weight" : `${weight}`, "status": `${status}`})
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth').then((response:AxiosResponse<initialAuthStateType>) => response.data)
    },
    authMe(login: string, password: string, auth: boolean) {
        return instance.post('auth',{"login" : login, "password" : password, "isAuth" : auth})
    }
}