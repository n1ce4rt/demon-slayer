import { combineReducers, createStore, applyMiddleware } from "redux";
import {heroes_reducer} from "../reducers/Heroes-reducer";
import ThunkMiddleware from 'redux-thunk'
import {auth_reducer} from "../reducers/Auth-reducer";
import {demons_reducer} from "../reducers/Demons-reducer";
import {app_reducer} from "../reducers/App-reducer";

const rootReducers = combineReducers( {
    heroesReducer: heroes_reducer,
    demonsReducer: demons_reducer,
    authReducer: auth_reducer,
    appReducer: app_reducer

});

export const store = createStore(rootReducers,applyMiddleware(ThunkMiddleware));


export type rootReducerType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store;