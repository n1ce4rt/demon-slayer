import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {ConnectedHeroesContainer} from "../heroes/Heroes_container";
import {ConnectedDemonsContainer} from "../demons/Demons_container";
import {ConnectedLoginContainer} from "../login/Login_container";
import {ConnectedCreateHero } from "../createHero/Create_hero_container";



export const Main =() => {
    return (
        <Routes>
            <Route path={'/'} element={<ConnectedHeroesContainer />} />
            <Route path={'login'} element={<ConnectedLoginContainer />} />
            <Route path={`heroes/:page`} element={<ConnectedHeroesContainer />} />
            <Route path={'demons'} element={<ConnectedDemonsContainer />} />
            <Route path={'create'} element={<ConnectedCreateHero />} />
        </Routes>

    )
}
