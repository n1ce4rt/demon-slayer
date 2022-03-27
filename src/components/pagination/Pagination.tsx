import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {getHeroesTC} from "../../reducers/Heroes-reducer";
import {rootReducerType} from "../../store/Store-redux";

export const BasicPagination =() => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: rootReducerType):number => state.heroesReducer.currentPage)
    return (
        <Stack spacing={2} sx={{margin: '15px auto', width: 'fit-content'}}>
            <Pagination count={20 / 5} page={currentPage} onChange={(event, page) => dispatch(getHeroesTC(5, page))}/>
        </Stack>
    );
}