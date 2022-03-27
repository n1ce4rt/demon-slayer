import {useEffect} from "react";
import {Login} from "./Login";
import {rootReducerType} from "../../store/Store-redux";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {authMeTC} from "../../reducers/Auth-reducer";

type mapStateToPropsType = {
    isAuth: boolean | null
    error: string | undefined
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        error: state.authReducer.error
    }
}
export type mapDispatchToPropsType = {
    authMeTC: (login: string, password: string, isAuth: boolean) => void
}

const LoginContainer = ({isAuth, error, authMeTC} : mapStateToPropsType & mapDispatchToPropsType) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            setTimeout(() => {

                navigate('/heroes/page=1')
            }, 2000)

        }
    }, [isAuth, error])


    return (
        <Login
            isAuth={isAuth}
            error={error}
            authMe={authMeTC}
        />
    )
}
export const ConnectedLoginContainer = connect(mapStateToProps, {authMeTC})(LoginContainer)