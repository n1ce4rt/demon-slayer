import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {useState} from "react";
import Button from "@mui/material/Button";
import {Hero} from "./Hero";
import {BasicPagination} from "../pagination/Pagination";
import {Search} from "../search/Search";
import {useNavigate} from "react-router-dom";
import {heroType} from "../../types/Heroes_reducer_types";


type statusType = 'Жив' | 'Мертв' | 'Все'

type propsType = {
    heroes: Array<heroType>
    deleteHero: (heroId: string) => void
    createHero: (name: any, id: any, img: any) => void
    deleteHeroGlobal: (heroId: string) => void
    changeHero: (heroId: string, age: string, birthday: string , growth: string, weight: string, status: string) => void
    searchHero: (name: string) => void
}
export const Heroes = ({
                           heroes,
                           deleteHero,
                           deleteHeroGlobal,
                           changeHero,
                       }: propsType) => {

    const [filter, setFilter] = useState<statusType>('Все')

    const [search, setSearch] = useState<string>('')

    let filterHeroes = heroes.filter((hero) => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    if (filter === 'Жив') {
        filterHeroes = heroes.filter(hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && (hero.status === 'Жив' || hero.status === 'Жива'))
    }
    if (filter === 'Мертв') {
        filterHeroes = heroes.filter(hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && (hero.status === 'Мертв' || hero.status === 'Мертва'))
    }
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm"
                       sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0'}}>
                <BasicPagination who={'hero'}/>
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
                        filterHeroes.map((hero: heroType) => {
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
                                changeHero={changeHero}
                            />
                        })
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}





