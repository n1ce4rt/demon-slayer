import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useState} from "react";
import {Demon} from "./Demon";
import Button from "@mui/material/Button";
import {BasicPagination} from "../pagination/Pagination";
import {Search} from "../search/Search";
import {useNavigate} from "react-router-dom";
import {demonType} from "../../types/Demons_reducer_types";

type propsType = {
    demons: Array<demonType>
    deleteDemon: (demonId: string) => void
    deleteDemonGlobal: (demonId: string) => void
    changeDemon: (demonId: string, age: string, birthday: string , growth: string, weight: string, status: string) => void
}
type statusType = 'Жив' | 'Мертв' | 'Все'

export const Demons = ({demons, deleteDemon, deleteDemonGlobal, changeDemon}: propsType) => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState<statusType>('Все')
    const [search, setSearch] = useState<string>('')
    let filterDemons = demons.filter((demon) => demon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    if (filter === 'Жив') {
        filterDemons = demons.filter(demon => demon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && (demon.status === 'Жив' || demon.status === 'Жива'))
    }
    if (filter === 'Мертв') {
        filterDemons = demons.filter(demon => demon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && (demon.status === 'Мёртв' || demon.status === 'Мертва'))
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0'}}>
                <BasicPagination who={'demon'} />
                <Search searchHero={setSearch}/>
                <Button sx={{marginInline: '0px'}} onClick={() => navigate('/create')}>Добавить</Button>
            </Container>
            <Container maxWidth="sm" sx={{backgroundColor: '#cfe8fc', borderRadius: '5px', width: '575px'}}>
                <Box sx={{backgroundColor: '#cfe8fc', height: 'fit-content', width: '530px'}}>
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
                    {filterDemons.map((demon: demonType) => {
                        return (
                            <Demon key={demon.id}
                                   id={demon.id}
                                   img={demon.img}
                                   name={demon.name}
                                   dob={demon['date of birth']}
                                   age={demon.age}
                                   utensils={demon.utensils}
                                   genus={demon.genus}
                                   growth={demon.growth}
                                   weight={demon.weight}
                                   status={demon.status}
                                   deleteDemon={deleteDemon}
                                   deleteDemonGlobal={deleteDemonGlobal}
                                   changeDemon={changeDemon}

                            />)
                    })}
                </Box>
            </Container>
        </React.Fragment>
    );
}
