const SET_STATUS = 'SET_STATUS'

const initialAppState: initialAppStateType = {
    status: 'nice'
}

export const app_reducer = (state: initialAppStateType = initialAppState, action: appActionType): initialAppStateType => {
    switch (action.type) {
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}
export const setStatusAC = (status: statusType): setStatusACType => ({type: SET_STATUS, status} as const)

export type initialAppStateType = {
    status: statusType
}
export type statusType = 'loading' | 'nice' | 'some'

export type appActionType = setStatusACType

export type setStatusACType = {
    type: 'SET_STATUS'
    status: statusType
}