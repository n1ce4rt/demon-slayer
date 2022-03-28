import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {getHeroesTC} from "../../reducers/Heroes-reducer";
import {getDemonsTC} from "../../reducers/Demons-reducer";
import {rootReducerType} from "../../store/Store-redux";

type propsType = {
    who: 'hero' | 'demon'
}
export const BasicPagination =({who}: propsType) => {
    const dispatch = useDispatch();
    const currentHeroPage = useSelector((state: rootReducerType):number => state.heroesReducer.currentPage)
    const currentDemonPage = useSelector((state: rootReducerType):number => state.demonsReducer.currentPage)
    return (
        <Stack spacing={2} sx={{margin: '15px auto', width: 'fit-content'}}>
            <Pagination
                count={who === 'hero'? 20/5 : Math.ceil(7/5)}
                page={who === 'hero' ? currentHeroPage: currentDemonPage}
                onChange={(event, page:number) => {
                    who === 'hero' ?
                        dispatch(getHeroesTC(5, page)) :
                        dispatch(getDemonsTC(5, page))
                }}/>
        </Stack>
    );
}