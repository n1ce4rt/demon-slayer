import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/Store-redux";
import {authMeTC, logOutAC} from "../../reducers/Auth-reducer";
import {useEffect} from "react";

export const Header =() => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state: rootReducerType) : string => state.authReducer.login as string)
    const currentHeroPage = useSelector((state: rootReducerType) : number => state.heroesReducer.currentPage)
    const currentDemonPage = useSelector((state: rootReducerType) : number => state.demonsReducer.currentPage)
    const auth = useSelector((state:rootReducerType) :boolean | null => state.authReducer.isAuth)
    useEffect(() => {

    },[currentHeroPage, currentDemonPage])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button disabled={!auth} onClick={() => {navigate(`/heroes/page=${currentHeroPage}`)}} sx={{ my: 2, color: 'white', display: 'inline' }}  variant={'outlined'}>Герои</Button>
                        <Button disabled={!auth} onClick={() => {navigate(`/demons/page=${currentDemonPage}`)}} sx={{ my: 2, color: 'white', display: 'inline' }}  variant={'outlined'}>Демоны</Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        {
                            auth?
                                <Button onClick={() => {
                                    navigate('/login')
                                    dispatch(logOutAC())}} sx={{ my: 2, color: 'white', display: 'block' }}  variant={'outlined'}>{`Привет ${user}`}</Button>:
                                <Button onClick={() => navigate('/login')} sx={{ my: 2, color: 'white', display: 'block' }}  variant={'outlined'}>Login</Button>
                        }
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
