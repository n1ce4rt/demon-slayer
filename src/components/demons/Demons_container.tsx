import {Demons} from "./Demons";
import {rootReducerType} from "../../store/Store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {useEffect} from "react";
import {demonType, getDemonsTC} from "../../reducers/Demons-reducer";


export type demonsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    demons: Array<demonType>
}
export type mapDispatchToPropsType = {
    getDemonsTC: () => void
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        demons: state.demonsReducer.demons,
    }
}

export const DemonsContainer = ({getDemonsTC, demons}: demonsType) => {
    useEffect(() => {
        getDemonsTC()
    }, [])

    return (
        <Demons demons={demons}
        />
    )
}

const WithRedirectDemonsContainer = withAuthRedirect(DemonsContainer)

export const ConnectedDemonsContainer = connect(mapStateToProps, {getDemonsTC})(WithRedirectDemonsContainer)