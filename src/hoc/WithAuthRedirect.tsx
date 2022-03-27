import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../store/Store-redux";
import {ConnectedLoginContainer} from "../components/login/Login_container";


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
        if (!isAuth) return <ConnectedLoginContainer />


        return <Component {...restProps as T}/>

    }


    let ConnectedRedirectComponent = connect(MapStateToProps, {})(RedirectComponent)

    return ConnectedRedirectComponent;
}