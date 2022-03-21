import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {useState} from "react";
import {heroType} from "../../reducers/Heroes-reducer";
import Button from "@mui/material/Button";
import {Hero} from "./Hero";


type statusType = 'Жив' | 'Мертв' | 'Все'

type propsType = {
    heroes: Array<heroType>
    deleteHero: (heroId: number) => void
    changeAge: (heroId: number, age: number | string) => void
    createHero: (name: any, id: any, img: any)  => void
}
export const Heroes = ({heroes, deleteHero, changeAge, createHero }: propsType) => {


    const [filter, setFilter] = useState<statusType>('Все')


    let filterHeroes = heroes

    if (filter === 'Жив') {
        filterHeroes = heroes.filter(hero => hero.status === 'Жив' || hero.status === 'Жива')
    }
    if (filter === 'Мертв') {
        filterHeroes = heroes.filter(hero => hero.status === 'Мертв' || hero.status === 'Мертва')
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm"
                       sx={{backgroundColor: '#cfe8fc', marginTop: '10px', borderRadius: '5px', width: '575px'}}>

                <Box sx={{backgroundColor: 'transparent', height: 'fit-content', width: '530px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button variant={filter === 'Все' ? "contained" : 'text'} sx={{marginInline: '0px'}}
                                onClick={() => (setFilter('Все'))}>Все</Button>
                        <Button variant={filter === 'Жив' ? "contained" : 'text'} sx={{marginInline: '0px'}}
                                onClick={() => (setFilter('Жив'))}>Жив(a)</Button>
                        <Button variant={filter === 'Мертв' ? "contained" : 'text'} sx={{marginInline: '0px'}}
                                onClick={() => (setFilter('Мертв'))}>Мертв(a)</Button>
                        <Button sx={{marginInline: '0px'}}
                                onClick={() => {

                                    createHero('Артур', 100, '2222')
                                }}>+</Button>
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
                                            changeAge={changeAge}

                            />
                        })
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}





