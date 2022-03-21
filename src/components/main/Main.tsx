import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {Login} from "../login/Login";
import {useEffect} from "react";
import {ConnectedHeroesContainer} from "../heroes/Heroes_container";
import {ConnectedDemonsContainer} from "../demons/Demons_container";



export const Main =() => {
    useEffect(() => {
        console.log('Меин отрисовалась')
    },[])
    return (
        <Routes>
            <Route path={'/'} element={<ConnectedHeroesContainer />} />
            <Route path={'login'} element={<Login />} />
            <Route path={'heroes'} element={<ConnectedHeroesContainer />} />
            <Route path={'demons'} element={<ConnectedDemonsContainer />} />
        </Routes>

    )
}
