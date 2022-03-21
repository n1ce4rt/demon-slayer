import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../store/Store-redux";
import {Login} from "../components/login/Login";


type mapStateToPropsType = {
    isAuth: boolean | null
}
const MapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {


    const RedirectComponent = (props: mapStateToPropsType): JSX.Element => {


        let {isAuth, ...restProps} = props
        if (!isAuth) return <Login/>


        return <Component {...restProps as T}/>

    }


    let ConnectedRedirectComponent = connect(MapStateToProps, {})(RedirectComponent)

    return ConnectedRedirectComponent;
}