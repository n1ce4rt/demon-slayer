import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {useState} from "react";
import {heroType} from "../../reducers/Heroes-reducer";
import Button from "@mui/material/Button";
import {Hero} from "./Hero";
import {BasicPagination} from "../pagination/Pagination";
import {Search} from "../search/Search";
import {useNavigate} from "react-router-dom";


type statusType = 'Жив' | 'Мертв' | 'Все'

type propsType = {
    heroes: Array<heroType>
    deleteHero: (heroId: string) => void
    changeAge: (heroId: string, age: number | string) => void
    createHero: (name: any, id: any, img: any) => void
    deleteHeroGlobal: (heroId: string) => void
    changeHero: (heroId: string, age: string, birthday: string , growth: string, weight: string, status: string) => void
    searchHero: (name: string) => void
    changeBirthday: (heroId: string, birthday: string) => void
    changeGrowth: (heroId: string, growth: string) => void
    changeWeight: (heroId: string, weight: string) => void
    changeStatus: (heroId: string, status: string) => void

}
export const Heroes = ({
                           heroes,
                           deleteHero,
                           changeAge,
                           createHero,
                           deleteHeroGlobal,
                           changeHero,
                           searchHero,
                           changeBirthday,
                           changeGrowth,
                           changeWeight, changeStatus
                       }: propsType) => {

    const [filter, setFilter] = useState<statusType>('Все')

    const [search, setSearch] = useState<string>('')

    let filterHeroes = heroes.filter((hero) => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    if (filter === 'Жив') {
        filterHeroes = heroes.filter(hero => (hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && hero.status === ('Жив' || 'Жива')))
    }
    if (filter === 'Мертв') {
        filterHeroes = heroes.filter(hero => (hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && hero.status === ('Мертв' || 'Мертва')))
    }
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm"
                       sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0'}}>
                <BasicPagination/>
                <Search searchHero={setSearch}/>
                <Button sx={{marginInline: '0px'}}
                        onClick={() => {
                            navigate('/create')
                        }}>Добавить</Button>
            </Container>

            <Container maxWidth="sm"
                       sx={{backgroundColor: '#cfe8fc', borderRadius: '5px', width: '575px'}}>

                <Box sx={{backgroundColor: 'transparent', height: 'fit-content', width: '530px'}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '10px 0 10px'
                    }}>
                        <Button variant={filter === 'Все' ? "contained" : 'text'}
                                onClick={() => (setFilter('Все'))}>Все</Button>
                        <Button variant={filter === 'Жив' ? "contained" : 'text'}
                                onClick={() => (setFilter('Жив'))}>Жив(a)</Button>
                        <Button variant={filter === 'Мертв' ? "contained" : 'text'}
                                onClick={() => (setFilter('Мертв'))}>Мертв(a)</Button>

                    </Box>

                    {
                        filterHeroes.map((hero) => {
                            return <Hero
                                key={hero.id}
                                id={hero.id}
                                img={hero.img}
                                name={hero.name}
                                dob={hero['date of birth']}
                                age={hero.age}
                                growth={hero.growth}
                                weight={hero.weight}
                                style={hero.style}
                                utensils={hero.utensils}
                                status={hero.status}
                                deleteHero={deleteHero}
                                deleteHeroGlobal={deleteHeroGlobal}
                                changeAge={changeAge}
                                changeHero={changeHero}
                                changeBirthday={changeBirthday}
                                changeGrowth={changeGrowth}
                                changeWeight={changeWeight}
                                changeStatus={changeStatus}

                            />
                        })
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}





