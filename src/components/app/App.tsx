import React from 'react';
import style from './App.module.css';
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../store/Store-redux";


export const App = () => {
    const status = useSelector((state: rootReducerType): string => state.appReducer.status)

    return (
        <div className={style.app} style={{position: "relative"}}>
            {
                status === 'loading' &&
                <LinearProgress sx={{position: "absolute", top: '70px', left: '0px', width: '100%'}}/>
            }
            <Header/>
            <Main/>
        </div>
    );
}


